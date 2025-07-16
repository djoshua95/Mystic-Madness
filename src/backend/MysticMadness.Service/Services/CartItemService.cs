using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MysticMadness.Domain.UnitOfWork;
using MysticMadness.Dto.Create;
using MysticMadness.Dto.Retrieve;
using MysticMadness.Dto.Update;
using MysticMadness.Model.Entities;
using MysticMadness.Service.Generics;
using MysticMadness.Service.Utils.Logging;

namespace MysticMadness.Service.Services;

public interface ICartItemService
{
    Task<DataResult<List<CartItemDto>>> GetByUserSub(string sub);
    Task<DataResult<CartItemDto>> SaveCartItem(CreateCartItemDto dto);
    Task<DataResult<List<CartItemDto>>> UpdateCart(List<UpdateCartItemDto> cart, string sub);
}

public class CartItemService(IUnitOfWork unitOfWork, IMapper mapper, ILogger<CartItemService> logger) : ICartItemService
{
    private readonly IUnitOfWork _unitOfWork = unitOfWork;
    private readonly IMapper _mapper = mapper;
    private readonly ILogger<CartItemService> _logger = logger;

    public async Task<DataResult<List<CartItemDto>>> GetByUserSub(string sub)
    {
        DataResult<List<CartItemDto>> result = new();
        try
        {
            var cartItems = await _unitOfWork
                .CartItemRepository
                .GetFiltered(ci => ci.User.Sub == sub)
                .Include(ci => ci.Product)
                .ThenInclude(p => p.Category)
                .Include(ci => ci.Product)
                .ThenInclude(p => p.Attachments)
                .ToListAsync();
            var dtos = _mapper.Map<List<CartItemDto>>(cartItems);
            result.Data = dtos;
            result.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.CIS0002 { Ex = ex, Sub = sub };
            _logger.CustomLogError(logError);
            result.Success = false;
            result.Message = logError.GetClientMessage();
        }
        return result;
    }

    public async Task<DataResult<CartItemDto>> SaveCartItem(CreateCartItemDto dto)
    {
        DataResult<CartItemDto> result = new();
        try
        {
            var mappedCartItem = _mapper.Map<CartItem>(dto);
            var savedCartItem = await _unitOfWork.CartItemRepository.SaveAsync(mappedCartItem);
            var cartItemDto = _mapper.Map<CartItemDto>(savedCartItem);
            result.Data = cartItemDto;
            result.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.CIS0001 { Ex = ex, UserId = dto.UserId!.Value };
            _logger.CustomLogError(logError);
            result.Success = false;
            result.Message = logError.GetClientMessage();
        }
        return result;
    }

    public async Task<DataResult<List<CartItemDto>>> UpdateCart(List<UpdateCartItemDto> cart, string sub)
    {
        DataResult<List<CartItemDto>> result = new();
        try
        {
            var mappedCart = _mapper.Map<List<CartItem>>(cart);
            var existingCart = await _unitOfWork
                .CartItemRepository
                .GetFiltered(ci => ci.User.Sub == sub)
                .AsNoTracking()
                .ToListAsync();

            var toUpdate = mappedCart
                .IntersectBy(existingCart.Select(ci => ci.Id), c => c.Id);
            await _unitOfWork.CartItemRepository.UpdateMultipleAsync(toUpdate.Where(ci => ci.Quantity > 0));

            var toRemove = existingCart
                .ExceptBy(toUpdate.Select(ci => ci.Id), c => c.Id)
                .Select(ci => ci.Id)
                .Concat(toUpdate.Where(ci => ci.Quantity == 0).Select(ci => ci.Id));
            await _unitOfWork.CartItemRepository.DeleteMultipleAsync(toRemove);

            var toAdd = mappedCart.ExceptBy(toUpdate.Select(ci => ci.Id), c => c.Id);
            await _unitOfWork.CartItemRepository.SaveMultipleAsync(toAdd.Where(ci => ci.Quantity > 0));

            result.Data = (await GetByUserSub(sub)).Data;
            result.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.CIS0003 { Ex = ex, Sub = sub };
            _logger.CustomLogError(logError);
            result.Success = false;
            result.Message = logError.GetClientMessage();
        }
        return result;
    }
}

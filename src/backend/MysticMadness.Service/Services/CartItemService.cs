using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MysticMadness.Domain.UnitOfWork;
using MysticMadness.Dto.Create;
using MysticMadness.Dto.Retrieve;
using MysticMadness.Model.Entities;
using MysticMadness.Service.Generics;
using MysticMadness.Service.Utils.Logging;

namespace MysticMadness.Service.Services;

public interface ICartItemService
{
    Task<DataResult<List<CartItemDto>>> GetByUserId(int userId);
    Task<DataResult<CartItemDto>> SaveCartItem(CreateCartItemDto dto);
}

public class CartItemService(IUnitOfWork unitOfWork, IMapper mapper, ILogger<CartItemService> logger) : ICartItemService
{
    private readonly IUnitOfWork _unitOfWork = unitOfWork;
    private readonly IMapper _mapper = mapper;
    private readonly ILogger<CartItemService> _logger = logger;

    public async Task<DataResult<List<CartItemDto>>> GetByUserId(int userId)
    {
        DataResult<List<CartItemDto>> result = new();
        try
        {
            var cartItems = await _unitOfWork
                .CartItemRepository
                .GetFiltered(ci => ci.UserId == userId)
                .ToListAsync();
            var dtos = _mapper.Map<List<CartItemDto>>(cartItems);
            result.Data = dtos;
            result.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.CIS0002 { Ex = ex, UserId = userId };
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
}

using AutoMapper;
using Microsoft.Extensions.Logging;
using MysticMadness.Domain.UnitOfWork;
using MysticMadness.Dto.Create;
using MysticMadness.Dto.Retrieve;
using MysticMadness.Model.Entities;
using MysticMadness.Service.AppConstants;
using MysticMadness.Service.Generics;
using MysticMadness.Service.Utils;
using MysticMadness.Service.Utils.Logging;

namespace MysticMadness.Service.Services;

public class CartItemService(IUnitOfWork unitOfWork, IMapper mapper, ILogger<CartItemService> logger) : ICartItemService
{
    private readonly IUnitOfWork _unitOfWork = unitOfWork;
    private readonly IMapper _mapper = mapper;
    private readonly ILogger<CartItemService> _logger = logger;

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
            _logger.CustomLogError(new CustomLoggingMessages.CIS0001 { Ex = ex, UserId = dto.UserId!.Value });
            result.Success = false;
            result.Message = ErrorMessageBuilder.BuildFromMessageAndCode(
                Constants.ErrorMessages.ERROR_SAVE_ITEM_FAILED,
                Constants.ErrorCodes.CIS0001
            );
        }
        return result;
    }
}

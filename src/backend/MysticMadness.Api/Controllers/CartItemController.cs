using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using MysticMadness.Dto.Create;
using MysticMadness.Dto.Update;
using MysticMadness.Service.AppConstants;
using MysticMadness.Service.Generics;
using MysticMadness.Service.Services;

namespace MysticMadness.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartItemController(ICartItemService cartItemService) : ControllerBase
{
    private readonly ICartItemService _cartItemService = cartItemService;

    [HttpGet("{sub}")]
    [Authorize]
    public async Task<IActionResult> GetByUserId([FromRoute] string sub)
    {
        var result = await _cartItemService.GetByUserSub(sub);
        if (result.Success) return Ok(result);
        return BadRequest(result);
    }

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> Save([FromBody] CreateCartItemDto dto)
    {
        if (!ModelState.IsValid)
        {
            DataResult<object> defaultResult = new()
            {
                Success = false,
                Message = Constants.LoggingMessages.ERROR_INVALID_DTO
            };
            return BadRequest(defaultResult);
        }
        var result = await _cartItemService.SaveCartItem(dto);
        if (result.Success) return Ok(result);
        return BadRequest(result);
    }

    [HttpPut("{sub}")]
    [Authorize]
    public async Task<IActionResult> Update([FromBody] List<UpdateCartItemDto> cart, [FromRoute] string sub)
    {
        if (!ModelState.IsValid)
        {
            DataResult<object> defaultResult = new()
            {
                Success = false,
                Message = Constants.LoggingMessages.ERROR_INVALID_DTO
            };
            return BadRequest(defaultResult);
        }
        var result = await _cartItemService.UpdateCart(cart, sub);
        if (result.Success) return Ok(result);
        return BadRequest(result);
    }
}

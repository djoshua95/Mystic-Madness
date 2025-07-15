using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using MysticMadness.Dto.Create;
using MysticMadness.Service.AppConstants;
using MysticMadness.Service.Generics;
using MysticMadness.Service.Services;

namespace MysticMadness.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartItemController(ICartItemService cartItemService) : ControllerBase
{
    private readonly ICartItemService _cartItemService = cartItemService;

    [HttpGet("{userId:int}")]
    [Authorize(Roles = "user")]
    public async Task<IActionResult> GetByUserId([FromRoute] int userId)
    {
        var result = await _cartItemService.GetByUserId(userId);
        if (result.Success) return Ok(result);
        return BadRequest(result);
    }

    [HttpPost]
    [Authorize(Roles = "user")]
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
}

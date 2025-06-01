using Microsoft.AspNetCore.Mvc;
using MysticMadness.Dto.Create;
using MysticMadness.Service.Generics;
using MysticMadness.Service.Services;

namespace MysticMadness.WebService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartItemController(ICartItemService cartItemService) : ControllerBase
{
    private readonly ICartItemService _cartItemService = cartItemService;

    [HttpPost]
    public async Task<IActionResult> Save([FromBody] CreateCartItemDto dto)
    {
        if (!ModelState.IsValid)
        {
            DataResult<object> defaultResult = new() { Success = false, Message = "Invalid dto." };
            return BadRequest(defaultResult);
        }
        var result = await _cartItemService.SaveCartItem(dto);
        if (result.Success)
            return Ok(result);
        return BadRequest(result);
    }
}

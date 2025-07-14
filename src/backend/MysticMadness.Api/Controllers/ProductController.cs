using Microsoft.AspNetCore.Mvc;
using MysticMadness.Dto.Create;
using MysticMadness.Dto.Update;
using MysticMadness.Dto.Filters;
using MysticMadness.Service.Generics;
using MysticMadness.Service.Services;

namespace MysticMadness.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController(IProductService productService) : ControllerBase
{
    private readonly IProductService _productService = productService;

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById([FromRoute] int id)
    {
        var result = await _productService.GetByIdAsync(id);
        if (result.Success) return Ok(result);
        return BadRequest(result);
    }

    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] ProductFilterDto filter)
    {
        var result = await _productService.GetPagedProductsAsync(filter);
        if (result.Success) return Ok(result);
        return BadRequest(result);
    }

    [HttpPost]
    public async Task<IActionResult> Save([FromBody] CreateProductDto product)
    {
        if (!ModelState.IsValid)
        {
            DataResult<object> defaultResult = new() { Success = false, Message = "Invalid dto." };
            return BadRequest(defaultResult);
        }
        var result = await _productService.SaveAsync(product);
        if (result.Success) return Ok(result);
        return BadRequest(result);
    }

    [HttpPut]
    public async Task<IActionResult> Update([FromBody] UpdateProductDto product)
    {
        if (!ModelState.IsValid)
        {
            DataResult<object> defaultResult = new() { Success = false, Message = "Invalid dto." };
            return BadRequest(defaultResult);
        }
        var result = await _productService.UpdateAsync(product);
        if (result.Success) return Ok(result);
        return BadRequest(result);
    }
}

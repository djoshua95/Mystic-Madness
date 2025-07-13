using Microsoft.AspNetCore.Mvc;
using MysticMadness.Dto.Filters;
using MysticMadness.Service.Services;

namespace MysticMadness.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController(IProductService productService) : ControllerBase
{
    private readonly IProductService _productService = productService;

    public async Task<IActionResult> Get(int productId)
    {
        var result = await _productService.GetById(productId);
        if (result.Success) return Ok(result);
        return BadRequest(result);
    }

    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] ProductFilterDto filter)
    {
        var result = await _productService.GetPagedProducts(filter);
        if (result.Success) return Ok(result);
        return BadRequest(result);
    }
}

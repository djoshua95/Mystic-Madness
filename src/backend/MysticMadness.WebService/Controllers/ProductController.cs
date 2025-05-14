using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MysticMadness.Service.Services;
using MysticMadness.Dto.Filters;
using MysticMadness.Dto;

namespace MysticMadness.WebService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductController(ProductService productService)
    {
        _productService = productService;
    }


    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _productService.GetAllAsync();
        if (result.Success)
            return Ok(result.Data);

        return BadRequest(result.Message);
    }


    [HttpGet("paged")]
    public async Task<IActionResult> GetPaged([FromQuery] ProductFilterDto filter)
    {
        var result = await _productService.GetPagedAsync(filter);
        if (result.Success)
            return Ok(result.Data);

        return BadRequest(result.Message);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var result = await _productService.GetProductByIdAsync(id);
        if (result.Success)
            return Ok(result.Data);

        return NotFound(result.Message);
    }


    [HttpPost]
    public async Task<IActionResult> Create([FromBody] ProductCreateDto productCreateDto)
    {
        var result = await _productService.CreateAsync(productCreateDto);
        if (result.Success && result.Data != null)
            return CreatedAtAction(nameof(GetById), new { id = result.Data.Id }, result.Data); ;

        return BadRequest(result.Message);
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _productService.DeleteAsync(id);
        if (result.Success)
            return NoContent();

        return NotFound(result.Message);
    }


}
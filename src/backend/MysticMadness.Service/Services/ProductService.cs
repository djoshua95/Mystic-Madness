using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MysticMadness.Dto;
using MysticMadness.Dto.Filters;
using MysticMadness.Model;
using MysticMadness.Model.Entities;
using MysticMadness.Service.Generics;
using MysticMadness.Service.Services;

namespace MysticMadness.Service.Services;

public class ProductService : IProductService
{
    private readonly ApplicationDbContext _context;
    private readonly IMapper _mapper;

    public ProductService(ApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<DataResult<ProductDto>> GetProductByIdAsync(int id)
    {
        var product = await _context.Products
            .Include(p => p.Attachments) // incluir relaciones si es necesario
            .FirstOrDefaultAsync(p => p.Id == id);

        if (product == null)
            return DataResult<ProductDto>.Error("Product not found");

        var dto = _mapper.Map<ProductDto>(product);
        return DataResult<ProductDto>.CreateSuccess(dto);
    }

    public async Task<DataResult<List<ProductDto>>> GetAllAsync()
    {
        var products = await _context.Products
            .Include(p => p.Attachments)
            .ToListAsync();

        var dtoList = _mapper.Map<List<ProductDto>>(products);
        return DataResult<List<ProductDto>>.CreateSuccess(dtoList);
    }

    public async Task<DataResult<PagedResult<ProductDto>>> GetPagedAsync(ProductFilterDto filter)
    {
        var query = _context.Products.AsQueryable();

        if (!string.IsNullOrEmpty(filter.Name))
            query = query.Where(p => p.Name.Contains(filter.Name));

        var total = await query.CountAsync();

        var items = await query
            .Skip((filter.Page - 1) * filter.PageSize)
            .Take(filter.PageSize)
            .ToListAsync();

        var dtoItems = _mapper.Map<List<ProductDto>>(items);

        return DataResult<PagedResult<ProductDto>>.CreateSuccess(new PagedResult<ProductDto>
        {
            TotalItems = total,
            Items = dtoItems,
            PageNumber = filter.Page,
            PageSize = filter.PageSize
        });
    }

    public async Task<DataResult<ProductDto>> CreateAsync(ProductCreateDto productCreateDto)
    {
        var product = _mapper.Map<Product>(productCreateDto);
        product.CreationDate = DateTime.UtcNow;
        product.LastUpdateDate = DateTime.UtcNow;

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return DataResult<ProductDto>.CreateSuccess(_mapper.Map<ProductDto>(product));
    }


    public async Task<DataResult<ProductDto>> UpdateAsync(ProductDto productDto)
    {
        var existingProduct = await _context.Products.FindAsync(productDto.Id);
        if (existingProduct == null)
            return DataResult<ProductDto>.Error("Product not found");

        _mapper.Map(productDto, existingProduct);
        existingProduct.LastUpdateDate = DateTime.UtcNow;

        await _context.SaveChangesAsync();
        return DataResult<ProductDto>.CreateSuccess(_mapper.Map<ProductDto>(existingProduct));
    }

    public async Task<DataResult<bool>> DeleteAsync(int id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null)
            return DataResult<bool>.Error("Product not found");

        _context.Products.Remove(product);
        await _context.SaveChangesAsync();

        return DataResult<bool>.CreateSuccess(true);
    }
}

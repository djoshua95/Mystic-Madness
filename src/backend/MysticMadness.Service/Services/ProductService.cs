using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MysticMadness.Domain.UnitOfWork;
using MysticMadness.Dto.Create;
using MysticMadness.Dto.Filters;
using MysticMadness.Dto.Retrieve;
using MysticMadness.Dto.Update;
using MysticMadness.Model.Entities;
using MysticMadness.Service.Factories.PagedResult;
using MysticMadness.Service.Generics;
using MysticMadness.Service.Utils.Logging;

namespace MysticMadness.Service.Services;

public interface IProductService
{
    Task<DataResult<PagedResult<ProductDto>>> GetPagedProductsAsync(ProductFilterDto filter);
    Task<DataResult<ProductDto>> GetByIdAsync(int id);
    Task<DataResult<ProductDto>> SaveAsync(CreateProductDto dto);
    Task<DataResult<ProductDto>> UpdateAsync(UpdateProductDto dto);
    Task<DataResult<ProductDto>> DeleteAsync(int id);
}

public class ProductService
(
    IUnitOfWork unitOfWork,
    ILogger<ProductService> logger,
    IMapper mapper,
    IPagedResultFactory pagedResultFactory
) : IProductService
{
    private readonly IUnitOfWork _unitOfWork = unitOfWork;
    private readonly ILogger<ProductService> _logger = logger;
    private readonly IMapper _mapper = mapper;
    private readonly IPagedResultFactory _pagedResultFactory = pagedResultFactory;

    public async Task<DataResult<PagedResult<ProductDto>>> GetPagedProductsAsync(ProductFilterDto filter)
    {
        DataResult<PagedResult<ProductDto>> dataResult = new();
        try
        {
            var products = _unitOfWork.ProductRepository
                .GetFiltered(p =>
                    (filter.Category == null || (p.Category != null && p.Category.Name == filter.Category))
                    && (filter.Status == null || p.Status == filter.Status)
                )
                .Include(p => p.Category);

            var pagedDtos = await _pagedResultFactory
                .Create(products, filter.PageSize, filter.PageNumber)
                .WithMapping<ProductDto>()
                .BuildAsync();

            dataResult.Data = pagedDtos;
            dataResult.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.PROD0001 { Ex = ex };
            _logger.CustomLogError(logError);
            dataResult.Message = logError.GetClientMessage();
        }

        return dataResult;
    }

    public async Task<DataResult<ProductDto>> GetByIdAsync(int id)
    {
        DataResult<ProductDto> result = new();
        try
        {
            var product = await _unitOfWork
                .ProductRepository
                .GetAsync(id);
            var dto = _mapper.Map<ProductDto>(product);
            result.Data = dto;
            result.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.PROD0002 { Ex = ex };
            _logger.CustomLogError(logError);
            result.Message = logError.GetClientMessage();
        }
        return result;
    }

    public async Task<DataResult<ProductDto>> SaveAsync(CreateProductDto dto)
    {
        DataResult<ProductDto> result = new();
        try
        {
            var product = _mapper.Map<Product>(dto);
            product.CreationDate = DateTime.UtcNow;
            var storedProduct = await _unitOfWork
                .ProductRepository
                .SaveAsync(product);
            result.Data = _mapper.Map<ProductDto>(storedProduct);
            result.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.PROD0003 { Ex = ex };
            _logger.CustomLogError(logError);
            result.Message = logError.GetClientMessage();
        }
        return result;
    }

    public async Task<DataResult<ProductDto>> UpdateAsync(UpdateProductDto dto)
    {
        DataResult<ProductDto> result = new();
        try
        {
            var product = _mapper.Map<Product>(dto);
            product.LastUpdateDate = DateTime.UtcNow;
            var updatedProduct = await _unitOfWork
                .ProductRepository
                .UpdateAsync(product);
            result.Data = _mapper.Map<ProductDto>(updatedProduct);
            result.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.PROD0004 { Ex = ex };
            _logger.CustomLogError(logError);
            result.Message = logError.GetClientMessage();
        }
        return result;
    }

    public async Task<DataResult<ProductDto>> DeleteAsync(int id)
    {
        DataResult<ProductDto> result = new();
        try
        {
            var deletedProduct = await _unitOfWork
                .ProductRepository
                .DeleteAsync(id);
            var dto = _mapper.Map<ProductDto>(deletedProduct);
            result.Data = dto;
            result.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.PROD0005 { Ex = ex };
            _logger.CustomLogError(logError);
            result.Message = logError.GetClientMessage();
        }
        return result;
    }
}

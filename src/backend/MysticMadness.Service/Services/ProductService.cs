using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MysticMadness.Domain.UnitOfWork;
using MysticMadness.Dto.Filters;
using MysticMadness.Dto.Retrieve;
using MysticMadness.Service.Factories.PagedResult;
using MysticMadness.Service.Generics;
using MysticMadness.Service.Utils.Logging;

namespace MysticMadness.Service.Services;

public interface IProductService
{
    Task<DataResult<PagedResult<ProductDto>>> GetPagedProducts(ProductFilterDto filter);
    Task<DataResult<ProductDto>> GetById(int id);
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

    public async Task<DataResult<PagedResult<ProductDto>>> GetPagedProducts(ProductFilterDto filter)
    {
        DataResult<PagedResult<ProductDto>> dataResult = new() { Success = false };

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

    public async Task<DataResult<ProductDto>> GetById(int id)
    {
        DataResult<ProductDto> result = new();
        try
        {
            var product = await _unitOfWork.ProductRepository.GetAsync(id);
            var dto = _mapper.Map<ProductDto>(product);
            result.Data = dto;
            result.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.PROD0001 { Ex = ex };
            _logger.CustomLogError(logError);
            result.Message = logError.GetClientMessage();
        }
        return result;
    }
}

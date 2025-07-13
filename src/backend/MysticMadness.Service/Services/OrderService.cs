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

public interface IOrderService
{
    Task<DataResult<List<OrderDto>>> GetAllOrdersGivenAnUserIdAsync(int userId);
    Task<DataResult<PagedResult<OrderDto>>> GetPagedOrders(OrderFilterDto filter);
}

public class OrderService
(
    IUnitOfWork unitOfWork,
    ILogger<OrderService> logger,
    IMapper mapper,
    IPagedResultFactory pagedResultFactory
) : IOrderService
{
    private readonly IUnitOfWork _unitOfWork = unitOfWork;
    private readonly ILogger<OrderService> _logger = logger;
    private readonly IMapper _mapper = mapper;
    private readonly IPagedResultFactory _pagedResultFactory = pagedResultFactory;

    public async Task<DataResult<List<OrderDto>>> GetAllOrdersGivenAnUserIdAsync(int userId)
    {
        DataResult<List<OrderDto>> dataResult = new();
        try
        {
            var result = _unitOfWork
                .OrderRepository
                .GetFiltered(o => o.UserId == userId);
            var mappedData = _mapper.Map<List<OrderDto>>(await result.ToListAsync());
            dataResult.Data = mappedData;
            dataResult.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logMessage = new CustomLoggingMessages.ORDS0001 { Ex = ex, UserId = userId };
            _logger.CustomLogError(logMessage);
            dataResult.Success = false;
            dataResult.Message = logMessage.GetClientMessage();
        }
        return dataResult;
    }

    public async Task<DataResult<PagedResult<OrderDto>>> GetPagedOrders(OrderFilterDto filter)
    {
        DataResult<PagedResult<OrderDto>> dataResult = new() { Success = false };

        try
        {
            var orders = _unitOfWork.OrderRepository
                .GetFiltered(o =>
                    o.UserId == filter.UserId
                    && (filter.Status == null || o.Status == filter.Status)
                )
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Product);

            var pagedDtos = await _pagedResultFactory
                .Create(orders, filter.PageSize, filter.PageNumber)
                .WithMapping<OrderDto>()
                .BuildAsync();

            dataResult.Data = pagedDtos;
            dataResult.Success = true;
        }
        catch (Exception ex)
        {
            ICustomLoggingMessage logError = new CustomLoggingMessages.ORDS0002 { Ex = ex, UserId = filter.UserId };
            _logger.CustomLogError(logError);
            dataResult.Message = logError.GetClientMessage();
        }

        return dataResult;
    }

}

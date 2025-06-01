using MysticMadness.Dto.Create;
using MysticMadness.Dto.Retrieve;
using MysticMadness.Service.Generics;

namespace MysticMadness.Service.Services;

public interface ICartItemService
{
    Task<DataResult<CartItemDto>> SaveCartItem(CreateCartItemDto dto);
}

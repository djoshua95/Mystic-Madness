namespace MysticMadness.Dto.Retrieve;

public class CartItemDto
{
    public int Id { get; set; }
    public int Quantity { get; set; }
    public int UserId { get; set; }
    public int ProductId { get; set; }

    // navigation properties
    public UserDto User { get; set; } = null!;
    public ProductDto Product { get; set; } = null!;
}

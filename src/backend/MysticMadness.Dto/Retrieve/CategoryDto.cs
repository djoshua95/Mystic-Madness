namespace MysticMadness.Dto.Retrieve;

public class CategoryDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;

    // navigation properties
    public List<ProductDto>? Products { get; set; } = [];
}

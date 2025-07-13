namespace MysticMadness.Dto.Filters;

public class ProductFilterDto : PagedRequest
{
    public string? Category { get; set; } = string.Empty;
    public bool? Status { get; set; }
}

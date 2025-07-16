namespace MysticMadness.Dto.Filters;

public class ProductFilterDto : PagedRequest
{
    public string? Category { get; set; }
    public bool? Status { get; set; }
}

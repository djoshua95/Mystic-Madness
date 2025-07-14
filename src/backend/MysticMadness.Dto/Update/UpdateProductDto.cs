using System.ComponentModel.DataAnnotations;

namespace MysticMadness.Dto.Update;

public class UpdateProductDto
{
    [Required]
    public int Id { get; set; }
    public decimal? Price { get; set; }
    public string? Description { get; set; } = string.Empty;
    public string? Name { get; set; } = string.Empty;
    public string? Model { get; set; } = string.Empty;
    public int? Stock { get; set; }
    public bool? Status { get; set; }
    public int? CategoryId { get; set; }
}

using System.ComponentModel.DataAnnotations;

namespace MysticMadness.Dto.Create;

public class CreateProductDto
{
    [Required]
    public string Name { get; set; } = string.Empty;
    [Required]
    public string Description { get; set; } = string.Empty;
    [Required]
    public decimal Price { get; set; }
    [Required]
    public int Stock { get; set; }
    [Required]
    public bool Status { get; set; }
    [Required]
    public int? CategoryId { get; set; }
    public string? Model { get; set; } = string.Empty;
}

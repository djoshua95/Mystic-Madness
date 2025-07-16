using System.ComponentModel.DataAnnotations;

namespace MysticMadness.Dto.Update;

public class UpdateProductDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public decimal? Price { get; set; }
    [Required]
    public string? Description { get; set; } = string.Empty;
    [Required]
    public string? Name { get; set; } = string.Empty;
    [Required]
    public string? Model { get; set; } = string.Empty;
    [Required]
    public int? Stock { get; set; }
    [Required]
    public bool? Status { get; set; }
    [Required]
    public int? CategoryId { get; set; }
}

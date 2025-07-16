using System.ComponentModel.DataAnnotations;

namespace MysticMadness.Dto.Create;

public class CreateCartItemDto
{
    [Required]
    public int? Quantity { get; set; }
    [Required]
    public int? UserId { get; set; }
    [Required]
    public int? ProductId { get; set; }
}

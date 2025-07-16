using System.ComponentModel.DataAnnotations;

namespace MysticMadness.Dto.Update;

public class UpdateCartItemDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public int Quantity { get; set; }
    [Required]
    public int UserId { get; set; }
    [Required]
    public int ProductId { get; set; }
}

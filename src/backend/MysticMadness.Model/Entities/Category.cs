using System.ComponentModel.DataAnnotations;

namespace MysticMadness.Model.Entities;

public class Category : IEntity
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;

    // navigation properties
    public List<Product> Products { get; set; } = [];
}

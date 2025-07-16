using System.ComponentModel.DataAnnotations;

namespace MysticMadness.Model.Entities;

public class User : IEntity
{
    [Key]
    public int Id { get; set; }
    public string Sub { get; set; } = string.Empty;
    public string? Name { get; set; }
    public string? NickName { get; set; }
    public string? GivenName { get; set; }
    public string? FamilyName { get; set; }
    public string? Picture { get; set; }
    public string? Email { get; set; }
    public bool? EmailVerified { get; set; }
}

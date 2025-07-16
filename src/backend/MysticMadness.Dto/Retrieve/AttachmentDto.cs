namespace MysticMadness.Dto.Retrieve;

public class AttachmentDto
{
    public int Id { get; set; }
    public string Link { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Format { get; set; } = string.Empty;
    public DateTime CreationDate { get; set; }
    public DateTime? LastUpdateDate { get; set; }
}

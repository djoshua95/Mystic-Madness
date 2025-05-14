using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class ProductUpdateDto
{
    public string? Name { get; set; }
    public string? Description { get; set; }
    public decimal? Price { get; set; }
    public bool? Stock { get; set; }
    public List<int>? AttachmentIds { get; set; }

}
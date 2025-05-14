using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MysticMadness.Dto
{
    public class ProductCreateDto
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public bool Stock { get; set; }
        public List<int> AttachmentIds { get; set; } = new();

    }
}
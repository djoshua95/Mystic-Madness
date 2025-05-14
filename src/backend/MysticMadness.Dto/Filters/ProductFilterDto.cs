using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MysticMadness.Dto.Filters
{
    public class ProductFilterDto
    {
        public string? Name { get; set; }
        public string? Search { get; set; }
        public decimal? MinPrice { get; set; }
        public decimal? MaxPrice { get; set; }
        public bool? Stock { get; set; }
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
    }
}
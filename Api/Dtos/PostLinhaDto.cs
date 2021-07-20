using System.Collections.Generic;

namespace Api.Dtos
{
    public class PostLinhaDto
    {
        public string Name { get; set; }
        public List<long> Paradas { get; set; }
    }
}
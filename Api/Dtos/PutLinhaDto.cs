using System.Collections.Generic;

namespace Api.Dtos
{
    public class PutLinhaDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public List<long> Paradas { get; set; }
    }
}
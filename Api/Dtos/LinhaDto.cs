using System.Collections.Generic;

namespace Api.Dtos
{
    public class LinhaDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public List<ParadaDto> Paradas { get; set; }
        
    }
}
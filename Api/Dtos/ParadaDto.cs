using System.Collections.Generic;

namespace Api.Dtos
{
    public class ParadaDto
    {
         public long Id {get; set;}
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public List<LinhaDto> Linhas { get; set; }
    }
}
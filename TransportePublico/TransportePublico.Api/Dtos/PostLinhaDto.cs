using System.Collections.Generic;

namespace TransportePublico.Api.Dtos
{
    public class PostLinhaDto
    {
        public string Name { get; set; }
        public List<long> Paradas { get; set; }
    }
}

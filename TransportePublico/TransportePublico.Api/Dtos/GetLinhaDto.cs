using System.Collections.Generic;

namespace TransportePublico.Api.Dtos
{
    public class GetLinhaDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public List<ParadaDto> Paradas { get; set; }
        public List<VeiculoDto> VeiculoDtos { get; set; }
    }
}

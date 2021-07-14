using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransportePublico.Api.Dtos
{
    public class PostPosicaoVeiculoDto
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public long VeiculoId { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransportePublico.Api.Dtos
{
    public class PostVeiculoDto
    {
        public string Name { get; set; }
        public string Modelo { get; set; }
        public long LinhaId { get; set; }
        public PostPosicaoVeiculoDto PosicaoVeiculo { get; set; }
    }
}

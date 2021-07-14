using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransportePublico.Api.Dtos
{
    public class PutLinhaDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public List<long> Paradas { get; set; }
    }
}

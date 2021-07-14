using System.Collections.Generic;

namespace TransportePublico.Domain
{
    public class Linha
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public List<Parada> Paradas { get; set; }
        public List<Veiculo> Veiculos { get; set; }
    }
}

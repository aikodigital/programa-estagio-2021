using System.Collections.Generic;

namespace TransportePublico.Domain
{
    public class Parada
    {
        public Parada()
        {
            Linhas = new List<Linha>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public List<Linha> Linhas { get; set; }
    }
}

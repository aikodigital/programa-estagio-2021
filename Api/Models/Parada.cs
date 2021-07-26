using System.Collections.Generic;

namespace Api.Models
{
    public class Parada
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public List<Linha> Linhas { get; set; }


        public Parada ()
        {
            Linhas = new List<Linha>();
        }
    }
}
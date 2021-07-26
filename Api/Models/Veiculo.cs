using System.Collections.Generic;

namespace Api.Models
{
    public class Veiculo
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Modelo { get; set; }
        public long LinhaId { get; set; }
        public Linha Linha { get; set; }
        public posicaoVeiculo PosicaoVeiculo { get; set; }
    }
}
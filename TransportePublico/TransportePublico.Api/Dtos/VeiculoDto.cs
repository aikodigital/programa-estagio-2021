namespace TransportePublico.Api.Dtos
{
    public class VeiculoDto
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Modelo { get; set; }
        public LinhaDto Linha { get; set; }
        public PosicaoVeiculoDto PosicaoVeiculo { get; set; }
    }
}

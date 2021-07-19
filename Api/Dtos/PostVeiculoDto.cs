namespace Api.Dtos
{
    public class PostVeiculoDto
    {
        public string Name { get; set; }
        public string Modelo { get; set; }
        public long LinhaId { get; set; }
        public PostPosicaoVeiculoDto PosicaoVeiculo { get; set; }
    }
}
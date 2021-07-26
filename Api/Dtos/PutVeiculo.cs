namespace Api.Dtos
{
    public class PutVeiculo
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Modelo { get; set; }
        public long LinhaId { get; set; }
    }
}
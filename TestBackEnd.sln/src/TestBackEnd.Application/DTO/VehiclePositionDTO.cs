namespace TestBackEnd.Application.DTO
{
    public class VehiclePositionDTO
    {
        public long Id { get; set; }
        
        public long VehicleId { get; set; }
        
        public double Latitude { get; set; }

        public double Longitude { get; set; }
    }
}
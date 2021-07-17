namespace TestBackEnd.Application.DTO
{
    public class VehicleDTO
    {
        public long Id { get; set; }
        
        public string Name { get; set; }
        
        public string Model { get; set; }
        
        public long LineId { get; set; }
        
        public VehiclePositionDTO VehiclePosition { get; set; }
        
    }
}
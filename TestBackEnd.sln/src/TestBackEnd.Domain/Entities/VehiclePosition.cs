namespace TestBackEnd.Domain.Entities
{
    public class VehiclePosition : Base
    {
        public double Latitude { get; private set; }
        
        public double Longitude { get; private set; }
        
        public long VehicleId { get; set; }

        public Vehicle Vehicle { get; set; }
        
        public VehiclePosition() { }

        public VehiclePosition(double latitude, double longitude, long vehicleId, Vehicle vehicle)
        {
            Latitude = latitude;
            Longitude = longitude;
            VehicleId = vehicleId;
            Vehicle = vehicle;
        }
    }
}
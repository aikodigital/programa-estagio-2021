namespace TestBackEnd.API.ViewModel.VehiclePositionViewModel
{
    public class UpdateVehiclePositionViewModel
    {
        public long Id { get; set; }
        
        public double Latitude { get; set; }
        
        public double Longitude { get; set; }
        
        public long VehicleId { get; set; }
    }
}
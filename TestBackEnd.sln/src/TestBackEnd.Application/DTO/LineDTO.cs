using System.Collections.Generic;

namespace TestBackEnd.Application.DTO
{
    public class LineDTO
    {
        public long Id { get; set; }
        
        public string Name { get; set; }
        
        public ICollection<StopDTO> Stops { get; set; }

        public ICollection<VehicleDTO> Vehicles { get; set; }
    }
}
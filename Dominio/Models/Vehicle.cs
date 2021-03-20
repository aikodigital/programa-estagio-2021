using System;
using System.Collections.Generic;

#nullable disable

namespace Dominio.Models
{
    public partial class Vehicle
    {
        public Vehicle()
        {
            VehicleLocations = new HashSet<VehicleLocation>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Model { get; set; }
        public int LineId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? DisabledAt { get; set; }

        public virtual Line Line { get; set; }
        public virtual ICollection<VehicleLocation> VehicleLocations { get; set; }
    }
}

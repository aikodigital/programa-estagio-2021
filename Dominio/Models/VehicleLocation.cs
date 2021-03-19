using System;
using System.Collections.Generic;

#nullable disable

namespace Dominio.Models
{
    public partial class VehicleLocation
    {
        public int Id { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public int VehicleId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? DisabledAt { get; set; }

        public virtual Vehicle Vehicle { get; set; }
    }
}

using System;
using System.Collections.Generic;

#nullable disable

namespace Dominio.Models
{
    public partial class Line
    {
        public Line()
        {
            LineByParades = new HashSet<LineByParade>();
            Vehicles = new HashSet<Vehicle>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? DisabledAt { get; set; }

        public virtual ICollection<LineByParade> LineByParades { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }
    }
}

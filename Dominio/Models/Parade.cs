using System;
using System.Collections.Generic;

#nullable disable

namespace Dominio.Models
{
    public partial class Parade
    {
        public Parade()
        {
            LineByParades = new HashSet<LineByParade>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? DisabledAt { get; set; }

        public virtual ICollection<LineByParade> LineByParades { get; set; }
    }
}

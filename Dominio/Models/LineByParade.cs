using System;
using System.Collections.Generic;

#nullable disable

namespace Dominio.Models
{
    public partial class LineByParade
    {
        public int Id { get; set; }
        public int LineId { get; set; }
        public int ParadeId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? DisabledAt { get; set; }

        public virtual Line Line { get; set; }
        public virtual Parade Parade { get; set; }
    }
}

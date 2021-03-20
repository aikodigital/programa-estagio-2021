using System;
using System.Collections.Generic;
using System.Text;

namespace Comunicacao.ViewObjects
{
    public class LineByParadeVO
    {
        public LineByParadeVO () { }

        public int Id { get; set; }
        public int LineId { get; set; }
        public int ParadeId { get; set; }
    }
}

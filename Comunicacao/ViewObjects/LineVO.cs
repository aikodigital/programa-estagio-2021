using System;
using System.Collections.Generic;
using System.Text;

namespace Comunicacao.ViewObjects
{
    public class LineVO
    {

        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class LineListVO
    {

        public LineListVO()
        {
            List = new List<LineVO>();
        }
        public List<LineVO> List;
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace Comunicacao.ViewObjects
{
    public class ParadeVO
    {
        public ParadeVO() { }
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }

    }
    public class ParadeListVO
    {

        public ParadeListVO()
        {
            List = new List<ParadeVO>();
        }
        public List<ParadeVO> List;
    }
}

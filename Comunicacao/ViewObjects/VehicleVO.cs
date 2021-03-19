using System;
using System.Collections.Generic;
using System.Text;

namespace Comunicacao.ViewObjects
{
    public class VehicleVO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Model { get; set; }
        public int LineId { get; set; }
    }

    public class VehicleListVO
    {

        public VehicleListVO()
        {
            List = new List<VehicleVO>();
        }
        public List<VehicleVO> List;
    }
}

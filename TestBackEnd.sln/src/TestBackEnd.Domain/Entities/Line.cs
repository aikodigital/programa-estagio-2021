using System.Collections.Generic;

namespace TestBackEnd.Domain.Entities
{
    public class Line : Base
    {
        public string Name { get; private set; }

        public ICollection<Stop> Stops { get; set; }

        public ICollection<Vehicle> Vehicles { get; set; }

        public Line() { }

        public Line(string name, ICollection<Stop> stops, ICollection<Vehicle> vehicles)
        {
            Name = name;
            Stops = stops;
            Vehicles = vehicles;
        }
    }
}
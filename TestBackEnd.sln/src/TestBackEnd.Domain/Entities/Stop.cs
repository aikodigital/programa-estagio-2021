using System.Collections.ObjectModel;

namespace TestBackEnd.Domain.Entities
{
    public class Stop : Base
    { 
        public string Name { get; private set; }
        
        public double Latitude { get; private set; }

        public double Longitude { get; private set; }
        
        public Collection<Line> Lines { get; set; }

        public Stop() { }
        
        public Stop(string name, double latitude, double longitude, Collection<Line> lines)
        {
            Name = name;
            Latitude = latitude;
            Longitude = longitude;
            Lines = lines;
        }
    }
}
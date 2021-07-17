namespace TestBackEnd.Domain.Entities
{
    public class Vehicle : Base
    {
        public string Name { get; private set; }
        
        public string Model { get; private set; }

        public long LineId { get; private set; }
        
        public Line Line { get; set; }

        public VehiclePosition VehiclePosition { get; set; }
        
        public Vehicle() { }

        public Vehicle(string name, string model, long lineId, Line line, VehiclePosition vehiclePosition)
        {
            Name = name;
            Model = model;
            LineId = lineId;
            Line = line;
            VehiclePosition = vehiclePosition;
        }
    }
}
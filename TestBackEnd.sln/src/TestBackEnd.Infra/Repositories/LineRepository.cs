using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TestBackEnd.Domain.Contracts.Repositories;
using TestBackEnd.Domain.Entities;
using TestBackEnd.Domain.Exceptions;
using TestBackEnd.Infra.Context;

namespace TestBackEnd.Infra.Repositories
{
    public class LineRepository : BaseRepository<Line>, ILineRepository
    {
        private readonly ManagerContext _context;
        
        public LineRepository(ManagerContext context) : base(context)
        {
            _context = context;
        }

        public override async Task<Line> Create(Line obj)
        {
            await AssociateLineWithStops(obj);
            await _context.Lines.AddAsync(obj);
            await _context.SaveChangesAsync();
            return obj;
        }
        private async Task AssociateLineWithStops(Line line)
        {
            var stops = new List<Stop>();
            
            foreach (var stop in line.Stops)
            {
                var stopConsult = await _context.Stops.FindAsync(stop.Id);
                stops.Add(stopConsult);
            }
            line.Stops = stops;
        }
        
        public override async Task<Line> Update(Line obj)
        {
            var lineConsult = await _context.Lines.Include(p => p.Stops)
                .Include(x => x.Vehicles)
                .FirstOrDefaultAsync(p => p.Id == obj.Id);
            
            if (lineConsult == null)
            {
                throw new DomainException();
            }
            _context.Entry(lineConsult).CurrentValues.SetValues(obj);
            await UpdateLineStops(obj, lineConsult);
            await UpdateLineVehicle(obj, lineConsult);
            await _context.SaveChangesAsync();
            return lineConsult;
        }

        private async Task UpdateLineVehicle(Line lineUpdated,Line lineConsult)
        {
            lineConsult.Vehicles.Clear();
            
            foreach (var vehicle in lineUpdated.Vehicles)
            {
                var vehicleConsult = await _context.Vehicles.FindAsync(vehicle.Id);
                lineConsult.Vehicles.Add(vehicleConsult);
            }
        }
        private async Task UpdateLineStops(Line lineUpdated,Line lineConsult)
        {
            lineConsult.Stops.Clear();
            
            foreach (var stop in lineUpdated.Stops)
            {
                var stopConsult = await _context.Stops.FindAsync(stop.Id);
                lineConsult.Stops.Add(stopConsult);
            }
        }
        
        public override async Task<Line> Get(long id)
        {
            return await _context.Lines.Include(x => x.Stops)
                .Include(v => v.Vehicles)
                .AsNoTracking()
                .SingleOrDefaultAsync(l => l.Id == id);
        }

        public override async Task<List<Line>> GetAll()
        {
            return await _context.Lines.Include(x => x.Stops)
                .Include(v => v.Vehicles)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<List<Line>> GetLinesByStop(long stopId)
        {
            var linesConsult  = await GetAll();

            return (from line in linesConsult from stop in line.Stops where stop.Id == stopId select line).ToList();
        }
    }
}
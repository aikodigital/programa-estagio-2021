using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TestBackEnd.Domain.Contracts.Repositories;
using TestBackEnd.Domain.Entities;
using TestBackEnd.Infra.Context;

namespace TestBackEnd.Infra.Repositories
{
    public class VehicleRepository : BaseRepository<Vehicle>, IVehicleRepository
    {
        private readonly ManagerContext _context;

        public VehicleRepository(ManagerContext context) : base(context)
        {
            _context = context;
        }
        
        public async Task<List<Vehicle>> GetVehicleByLine(long lineId)
        {
            var vehicles = await _context.Vehicles
                .Where(x => x.LineId == lineId)
                .AsNoTracking()
                .ToListAsync();

            return vehicles;
        }
    }
}
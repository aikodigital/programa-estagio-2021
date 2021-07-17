using TestBackEnd.Domain.Contracts.Repositories;
using TestBackEnd.Domain.Entities;
using TestBackEnd.Infra.Context;

namespace TestBackEnd.Infra.Repositories
{
    public class VehiclePositionRepository : BaseRepository<VehiclePosition>, IVehiclePositionRepository
    {
        private readonly ManagerContext _context;

        public VehiclePositionRepository(ManagerContext context) : base(context)
        {
            _context = context;
        }
    }
}
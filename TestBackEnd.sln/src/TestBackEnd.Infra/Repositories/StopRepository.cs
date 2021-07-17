using TestBackEnd.Domain.Contracts;
using TestBackEnd.Domain.Contracts.Repositories;
using TestBackEnd.Domain.Entities;
using TestBackEnd.Infra.Context;

namespace TestBackEnd.Infra.Repositories
{
    public class StopRepository : BaseRepository<Stop>, IStopRepository
    {
        private readonly ManagerContext _context;

        public StopRepository(ManagerContext context) : base(context)
        {
            _context = context;
        }
    }
}
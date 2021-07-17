using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Domain.Contracts.Repositories
{
    public interface IVehicleRepository : IBaseRepository<Vehicle>
    {
        Task<List<Vehicle>> GetVehicleByLine(long lineId);
    }
}
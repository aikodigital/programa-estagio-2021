using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Domain.Contracts.InterfacesDomainServices
{
    public interface IVehicleDomainService
    {
        Task<Vehicle> Create(Vehicle vehicle);
        Task<Vehicle> Update(Vehicle vehicle);
        Task Remove(long id);
        Task<Vehicle> Get(long id);
        Task<List<Vehicle>> GetAll();
        Task<List<Vehicle>> GetVehicleByLine(long id);
    }
}
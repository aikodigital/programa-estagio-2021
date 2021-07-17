using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Domain.Contracts.InterfacesDomainServices
{
    public interface IVehiclePositionDomainService
    {
        Task<VehiclePosition> Create(VehiclePosition vehiclePosition);
        Task<VehiclePosition> Update(VehiclePosition vehiclePosition);
        Task Remove(long id);
        Task<VehiclePosition> Get(long id);
        Task<List<VehiclePosition>> GetAll();
    }
}
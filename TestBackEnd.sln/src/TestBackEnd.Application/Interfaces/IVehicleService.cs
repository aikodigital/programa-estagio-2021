using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Application.DTO;

namespace TestBackEnd.Application.Interfaces
{
    public interface IVehicleService
    {
        Task<VehicleDTO> Create(VehicleDTO vehicleDto);
        Task<VehicleDTO> Update(VehicleDTO vehicleDto);
        Task Remove(long id);
        Task<VehicleDTO> Get(long id);
        Task<List<VehicleDTO>> GetAll();
        Task<List<VehicleDTO>> GetVehiclesByLine(long lineId);
    }
}
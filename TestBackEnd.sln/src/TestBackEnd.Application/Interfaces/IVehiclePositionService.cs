using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Application.DTO;

namespace TestBackEnd.Application.Interfaces
{
    public interface IVehiclePositionService
    {
        Task<VehiclePositionDTO> Create(VehiclePositionDTO vehiclePositionDto);
        Task<VehiclePositionDTO> Update(VehiclePositionDTO vehiclePositionDto);
        Task Remove(long id);
        Task<VehiclePositionDTO> Get(long id);
        Task<List<VehiclePositionDTO>> GetAll();
    }
}
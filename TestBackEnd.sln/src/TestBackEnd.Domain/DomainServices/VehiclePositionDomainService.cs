using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Domain.Contracts.InterfacesDomainServices;
using TestBackEnd.Domain.Contracts.Repositories;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Domain.DomainServices
{
    public class VehiclePositionDomainService : IVehiclePositionDomainService
    {
        private readonly IVehiclePositionRepository _vehiclePositionRepository;

        public VehiclePositionDomainService(IVehiclePositionRepository vehiclePositionRepository)
        {
            _vehiclePositionRepository = vehiclePositionRepository;
        }
        
        public async Task<VehiclePosition> Create(VehiclePosition vehiclePosition)
        {
            return await _vehiclePositionRepository.Create(vehiclePosition);
        }

        public async Task<VehiclePosition> Update(VehiclePosition vehiclePosition)
        {
            return await _vehiclePositionRepository.Update(vehiclePosition);
        }

        public async Task Remove(long id)
        {
            await _vehiclePositionRepository.Remove(id);
        }

        public async Task<VehiclePosition> Get(long id)
        {
            return await _vehiclePositionRepository.Get(id);
        }

        public async Task<List<VehiclePosition>> GetAll()
        {
            return await _vehiclePositionRepository.GetAll();
        }
    }
}
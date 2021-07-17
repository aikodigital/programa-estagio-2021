using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Domain.Contracts.InterfacesDomainServices;
using TestBackEnd.Domain.Contracts.Repositories;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Domain.DomainServices
{
    public class VehicleDomainService : IVehicleDomainService
    {
        private readonly IVehicleRepository _vehicleRepository;

        public VehicleDomainService(IVehicleRepository vehicleRepository)
        {
            _vehicleRepository = vehicleRepository;
        }
        
        public async Task<Vehicle> Create(Vehicle vehicle)
        {
            return await _vehicleRepository.Create(vehicle);
        }

        public async Task<Vehicle> Update(Vehicle vehicle)
        {
            return await _vehicleRepository.Update(vehicle);
        }

        public async Task Remove(long id)
        {
            await _vehicleRepository.Remove(id);
        }

        public async Task<Vehicle> Get(long id)
        {
            return await _vehicleRepository.Get(id);
        }

        public async Task<List<Vehicle>> GetAll()
        {
            return await _vehicleRepository.GetAll();
        }

        public async Task<List<Vehicle>> GetVehicleByLine(long id)
        {
           var vehicles =  await _vehicleRepository.GetVehicleByLine(id);

           return vehicles;
        }
    }
}
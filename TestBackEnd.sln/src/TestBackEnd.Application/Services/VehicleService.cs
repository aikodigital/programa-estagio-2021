using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using TestBackEnd.Application.DTO;
using TestBackEnd.Application.Interfaces;
using TestBackEnd.Domain.Contracts.InterfacesDomainServices;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Application.Services
{
    public class VehicleService : IVehicleService
    {
        private readonly IMapper _mapper;

        private readonly IVehicleDomainService _vehicleDomainService;

        public VehicleService(IMapper mapper, IVehicleDomainService vehicleDomainService)
        {
            _mapper = mapper;
            _vehicleDomainService = vehicleDomainService;
        }
        
        public async Task<VehicleDTO> Create(VehicleDTO vehicleDto)
        {
            var vehicle = _mapper.Map<Vehicle>(vehicleDto);

            var vehicleCreated = await _vehicleDomainService.Create(vehicle);

            return _mapper.Map<VehicleDTO>(vehicleCreated);
        }

        public async Task<VehicleDTO> Update(VehicleDTO vehicleDto)
        {
            var vehicle = _mapper.Map<Vehicle>(vehicleDto);

            var vehicleUpdated = await _vehicleDomainService.Update(vehicle);

            return _mapper.Map<VehicleDTO>(vehicleUpdated);
        }

        public async Task Remove(long id)
        {
            await _vehicleDomainService.Remove(id);
        }

        public async Task<VehicleDTO> Get(long id)
        {
            var vehicle = await _vehicleDomainService.Get(id);

            return _mapper.Map<VehicleDTO>(vehicle);
        }

        public async Task<List<VehicleDTO>> GetAll()
        {
            var vehicles = await _vehicleDomainService.GetAll();

            return _mapper.Map<List<VehicleDTO>>(vehicles);
        }

        public async Task<List<VehicleDTO>> GetVehiclesByLine(long lineId)
        {
            var vehicles = await _vehicleDomainService.GetVehicleByLine(lineId);

            return _mapper.Map<List<VehicleDTO>>(vehicles);
        }
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using TestBackEnd.Application.DTO;
using TestBackEnd.Application.Interfaces;
using TestBackEnd.Domain.Contracts.InterfacesDomainServices;
using TestBackEnd.Domain.DomainServices;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Application.Services
{
    public class VehiclePositionService : IVehiclePositionService
    {
        private readonly IMapper _mapper;
        
        private readonly IVehiclePositionDomainService _vehiclePositionDomainService;

        public VehiclePositionService(IMapper mapper, IVehiclePositionDomainService vehiclePositionDomainService)
        {
            _mapper = mapper;
            _vehiclePositionDomainService = vehiclePositionDomainService;
        }
        
        public async Task<VehiclePositionDTO> Create(VehiclePositionDTO vehiclePositionDto)
        {
            var vehicle = _mapper.Map<VehiclePosition>(vehiclePositionDto);
            
            var vehicleCreated= await _vehiclePositionDomainService.Create(vehicle);

            return _mapper.Map<VehiclePositionDTO>(vehicleCreated);
        }

        public async Task<VehiclePositionDTO> Update(VehiclePositionDTO vehiclePositionDto)
        {
            var vehicle = _mapper.Map<VehiclePosition>(vehiclePositionDto);
            
            var vehiclePositionCUpdated= await _vehiclePositionDomainService.Update(vehicle);
            
            return _mapper.Map<VehiclePositionDTO>(vehiclePositionCUpdated);
        }

        public async Task Remove(long id)
        {
            await _vehiclePositionDomainService.Remove(id);
        }

        public async Task<VehiclePositionDTO> Get(long id)
        {
            var vehiclePosition = await _vehiclePositionDomainService.Get(id);
            var vehiclePositionDto = _mapper.Map<VehiclePositionDTO>(vehiclePosition);
            return vehiclePositionDto;
        }

        public async Task<List<VehiclePositionDTO>> GetAll()
        {
            var vehiclesPotion = await _vehiclePositionDomainService.GetAll();

            return _mapper.Map<List<VehiclePositionDTO>>(vehiclesPotion);
        }
    }
}
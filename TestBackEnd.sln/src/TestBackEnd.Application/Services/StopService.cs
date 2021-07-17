using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using TestBackEnd.Application.DTO;
using TestBackEnd.Application.Interfaces;
using TestBackEnd.Domain.Contracts.InterfacesDomainServices;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Application.Services
{
    public class StopService : IStopService
    {
        private readonly IStopDomainService _stopDomainService;
        private readonly IMapper _mapper;

        public StopService(IStopDomainService stopDomainService, IMapper mapper)
        {
            _stopDomainService = stopDomainService;
            _mapper = mapper;
        }
        
        public async Task<StopDTO> Create(StopDTO stopDto)
        {
            var stop = _mapper.Map<Stop>(stopDto);
            
            var stopExists = await _stopDomainService.Get(stop.Id);

            if (stopExists != null)
            {
                throw new Exception("Parada duplicada");
            }
            var stopCreated = await _stopDomainService.Create(stop);

            return _mapper.Map<StopDTO>(stopCreated);
        }

        public async Task<StopDTO> Update(StopDTO stopDto)
        {
            var stop = _mapper.Map<Stop>(stopDto);

            var stopUpdated =  await _stopDomainService.Update(stop);

            return _mapper.Map<StopDTO>(stopUpdated);
        }

        public async Task Remove(long id)
        {
            await _stopDomainService.Remove(id);
        }

        public async Task<StopDTO> Get(long id)
        {
            var stopExist = await _stopDomainService.Get(id);

            if (stopExist == null)
            {
                throw new Exception("Parada não encontrada");
            }
            
            return _mapper.Map<StopDTO>(stopExist);
        }

        public async Task<List<StopDTO>> GetAll()
        {
            var stops = await _stopDomainService.GetAll();

            if (stops == null)
            {
                throw new Exception("Nenhuma parada encontrada");
            }
            return _mapper.Map<List<StopDTO>>(stops);
        }
    }
}
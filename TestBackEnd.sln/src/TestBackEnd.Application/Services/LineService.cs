using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using TestBackEnd.Application.DTO;
using TestBackEnd.Application.Interfaces;
using TestBackEnd.Domain.Contracts.InterfacesDomainServices;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Application.Services
{
    public class LineService : ILineService
    {
        private readonly ILineDomainService _lineDomainService;
        
        private readonly IMapper _mapper;

        public LineService(ILineDomainService lineDomainService, IMapper mapper)
        {
            _lineDomainService = lineDomainService;
            _mapper = mapper;
        }
        public async Task<LineDTO> Create(LineDTO lineDto)
        {
            var line = _mapper.Map<Line>(lineDto);
            var lineCreated = await _lineDomainService.Create(line);
            var lineDtoCreated =  _mapper.Map<LineDTO>(lineCreated);
            
            return lineDtoCreated;

        }

        public async Task<LineDTO> Update(LineDTO lineDto)
        {
            var line = _mapper.Map<Line>(lineDto);

            var lineUpdated = await _lineDomainService.Update(line);

            return _mapper.Map<LineDTO>(lineUpdated);
        }

        public async Task Remove(long id)
        {
            await _lineDomainService.Remove(id);
        }

        public async Task<LineDTO> Get(long id)
        {
            var line = await _lineDomainService.Get(id);

            return _mapper.Map<LineDTO>(line);
        }

        public async Task<List<LineDTO>> GetAll()
        {
            var lines = await _lineDomainService.GetAll();

            return _mapper.Map<List<LineDTO>>(lines);
        }

        public async Task<List<LineDTO>> GetLinesByStop(long id)
        {
            var lines = await _lineDomainService.GetLinesByStop(id);

            return _mapper.Map<List<LineDTO>>(lines);
        }
    }
}
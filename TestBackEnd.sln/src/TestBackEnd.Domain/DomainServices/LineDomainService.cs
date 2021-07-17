using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Domain.Contracts.InterfacesDomainServices;
using TestBackEnd.Domain.Contracts.Repositories;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Domain.DomainServices
{
    public class LineDomainService : ILineDomainService
    {
        private readonly ILineRepository _lineRepository;

        public LineDomainService(ILineRepository lineRepository)
        {
            _lineRepository = lineRepository;
        }
        
        public async Task<Line> Create(Line line)
        {
            return await _lineRepository.Create(line);
        }

        public async Task<Line> Update(Line line)
        {
            return await _lineRepository.Update(line);
        }

        public async Task Remove(long id)
        {
            await _lineRepository.Remove(id);
        }

        public async Task<Line> Get(long id)
        {
            return await _lineRepository.Get(id);
        }

        public async Task<List<Line>> GetAll()
        {
            return await _lineRepository.GetAll();
        }

        public async Task<List<Line>> GetLinesByStop(long stopId)
        {
            var lines = await _lineRepository.GetLinesByStop(stopId);

            return lines;
        }
    }
}
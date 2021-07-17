using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Domain.Contracts.InterfacesDomainServices;
using TestBackEnd.Domain.Contracts.Repositories;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Domain.DomainServices
{
    public class StopDomainService : IStopDomainService
    {
        private readonly IStopRepository _stopRepository;

        public StopDomainService(IStopRepository stopRepository)
        {
            _stopRepository = stopRepository;
        }
        
        public async Task<Stop> Create(Stop stop)
        {
            return await _stopRepository.Create(stop);
        }

        public async Task<Stop> Update(Stop stop)
        {
            return await _stopRepository.Update(stop);
        }

        public async Task Remove(long id)
        {
            await _stopRepository.Remove(id);
        }

        public async Task<Stop> Get(long id)
        {
            return await _stopRepository.Get(id);
        }

        public async Task<List<Stop>> GetAll()
        {
            return await _stopRepository.GetAll();
        }
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Domain.Contracts.InterfacesDomainServices
{
    public interface IStopDomainService
    {
        Task<Stop> Create(Stop stop);
        Task<Stop> Update(Stop stop);
        Task Remove(long id);
        Task<Stop> Get(long id);
        Task<List<Stop>> GetAll();
    }
}
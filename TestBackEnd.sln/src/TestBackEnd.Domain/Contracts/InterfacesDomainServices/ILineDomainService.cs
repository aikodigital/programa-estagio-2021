using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Domain.Contracts.InterfacesDomainServices
{
    public interface ILineDomainService
    {
        Task<Line> Create(Line line);
        Task<Line> Update(Line line);
        Task Remove(long id);
        Task<Line> Get(long id);
        Task<List<Line>> GetAll();
        Task<List<Line>> GetLinesByStop(long id);
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Domain.Contracts.Repositories
{
    public interface ILineRepository : IBaseRepository<Line>
    {
        Task<List<Line>> GetLinesByStop(long stopId);
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TestBackEnd.Domain.Contracts.Repositories
{
    public interface IBaseRepository<T>
    {
        Task<T> Create(T obj);
        Task<T> Update(T obj);
        Task Remove(long id);
        Task<T> Get(long id);
        Task<List<T>> GetAll();
    }
}
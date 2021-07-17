using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Application.DTO;

namespace TestBackEnd.Application.Interfaces
{
    public interface IStopService
    {
        Task<StopDTO> Create(StopDTO stopDto);

        Task<StopDTO> Update(StopDTO stopDto);

        Task Remove(long id);

        Task<StopDTO> Get(long id);

        Task<List<StopDTO>> GetAll();
    }
}
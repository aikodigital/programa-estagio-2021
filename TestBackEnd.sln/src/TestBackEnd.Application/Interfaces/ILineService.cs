using System.Collections.Generic;
using System.Threading.Tasks;
using TestBackEnd.Application.DTO;

namespace TestBackEnd.Application.Interfaces
{
    public interface ILineService
    {
        Task<LineDTO> Create(LineDTO lineDto);
        Task<LineDTO> Update(LineDTO lineDto);
        Task Remove(long id);
        Task<LineDTO> Get(long id);
        Task<List<LineDTO>> GetAll();
        Task<List<LineDTO>> GetLinesByStop(long id);
    }
}
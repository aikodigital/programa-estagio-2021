using System.Collections.Generic;
using Api.Models;
using System.Threading.Tasks;

namespace Api.Services
{
    public interface IVeiculoService
    {
        Task<Veiculo> GetById(long id);
        Task<List<Veiculo>> GetAll ();
        Task<Veiculo> Save(Veiculo veiculo);
        Task<Veiculo> Update(Veiculo veiculoAtualizado);
        Task<long?> Delete(long id);

        
    }
}
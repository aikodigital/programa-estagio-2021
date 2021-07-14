using System.Collections.Generic;
using System.Threading.Tasks;

using TransportePublico.Domain;

namespace TransportePublico.Service
{
    public interface IVeiculoService
    {
        Task<Veiculo> GetById(long id);
        Task<List<Veiculo>> GetAll();
        Task<Veiculo> Save(Veiculo veiculo);
        Task<Veiculo> Update(Veiculo veiculoAtualizado);
        Task<long?> Delete(long id);
    }
}

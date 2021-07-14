using System.Collections.Generic;
using System.Threading.Tasks;

using TransportePublico.Domain;

namespace TransportePublico.Service
{
    public interface IPosicaoVeiculoService
    {
        Task<PosicaoVeiculo> GetById(long id);
        Task<List<PosicaoVeiculo>> GetAll();
        Task<PosicaoVeiculo> Save(PosicaoVeiculo posicaoVeiculo);
        Task<PosicaoVeiculo> Update(PosicaoVeiculo posicaoVeiculoAtualizado);
        Task<long?> Delete(long id);
    }
}

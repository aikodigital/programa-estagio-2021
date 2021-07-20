using System.Collections.Generic;
using System.Threading.Tasks;
using Api.Models;

namespace Api.Services
{
    public interface IPosicaoVeiculoService
    {
        Task<posicaoVeiculo> GetById(long id);
        Task<List<posicaoVeiculo>> GetAll();
        Task<posicaoVeiculo> Save(posicaoVeiculo posicaoVeiculo);
        Task<posicaoVeiculo> Update(posicaoVeiculo posicaoVeiculoAtualizado);
        Task<long?> Delete(long id);
    }
}
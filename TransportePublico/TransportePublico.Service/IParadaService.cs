using System.Collections.Generic;
using System.Threading.Tasks;

using TransportePublico.Domain;

namespace TransportePublico.Service
{
    public interface IParadaService
    {
        Task<Parada> GetById(long id);
        Task<List<Parada>> GetAll();
        Task<Parada> Save(Parada parada);
        Task<Parada> Update(Parada paradaAtualizada);
        Task<long?> Delete(long id);
    }
}

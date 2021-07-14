using System.Collections.Generic;
using System.Threading.Tasks;

using TransportePublico.Domain;

namespace TransportePublico.Service
{
    public interface ILinhaService
    {
        Task<Linha> GetById(long id);
        Task<List<Linha>> GetAll();
        Task<Linha> Save(Linha linha, List<long> paradasId);
        Task<Linha> Update(Linha linhaAtualizada, List<long> paradasId);
        Task<long?> Delete(long id);
    }
}

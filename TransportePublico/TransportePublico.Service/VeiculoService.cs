using Microsoft.EntityFrameworkCore;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using TransportePublico.Data;
using TransportePublico.Domain;

namespace TransportePublico.Service
{
    public class VeiculoService : IVeiculoService
    {
        private readonly TransportePublicoApiContext _context;

        public VeiculoService(TransportePublicoApiContext context)
        {
            _context = context;
        }

        public async Task<Veiculo> GetById(long id)
        {
            var veiculo = await _context.Veiculo
                .Include(x => x.PosicaoVeiculo)
                .Include(x => x.Linha)
                .FirstOrDefaultAsync(x => x.Id == id);

            return veiculo;
        }

        public async Task<List<Veiculo>> GetAll()
        {
            var veiculos = await _context.Veiculo
                .Include(x => x.PosicaoVeiculo)
                .Include(x => x.Linha)
                .ToListAsync();

            return veiculos;
        }

        public async Task<Veiculo> Save(Veiculo veiculo)
        {
            _context.Veiculo.Add(veiculo);
            await _context.SaveChangesAsync();
            return veiculo;
        }

        public async Task<Veiculo> Update(Veiculo veiculoAtualizado)
        {
            var veiculo = await _context.Veiculo.FindAsync(veiculoAtualizado.Id);
            if (veiculo == null)
            {
                return null;
            }

            veiculo.Name = veiculoAtualizado.Name;
            veiculo.Modelo = veiculoAtualizado.Modelo;
            veiculo.LinhaId = veiculoAtualizado.LinhaId;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VeiculoExists(veiculo.Id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

            return veiculo;
        }

        public async Task<long?> Delete(long id)
        {
            var veiculo = await _context.Veiculo.FindAsync(id);
            if (veiculo == null)
            {
                return null;
            }

            _context.Veiculo.Remove(veiculo);
            await _context.SaveChangesAsync();

            return veiculo.Id;
        }

        private bool VeiculoExists(long id)
        {
            return _context.Veiculo.Any(e => e.Id == id);
        }
    }
}

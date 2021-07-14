using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportePublico.Data;
using TransportePublico.Domain;

namespace TransportePublico.Service
{
    public class ParadaService : IParadaService
    {
        private readonly TransportePublicoApiContext _context;

        public ParadaService(TransportePublicoApiContext context)
        {
            _context = context;
        }

        public async Task<Parada> GetById(long id)
        {
            var parada = await _context.Parada
                .Include(x => x.Linhas)
                .FirstOrDefaultAsync(x => x.Id == id);

            return parada;
        }

        public async Task<List<Parada>> GetAll()
        {
            var parada = await _context.Parada.ToListAsync();

            return parada;
        }
        public async Task<Parada> Save(Parada parada)
        {
            _context.Parada.Add(parada);
            await _context.SaveChangesAsync();

            return parada;
        }

        public async Task<Parada> Update(Parada paradaAtualizada)
        {
            var parada = await _context.Parada.FindAsync(paradaAtualizada.Id);
            if (parada == null)
            {
                return null;
            }

            parada.Name = paradaAtualizada.Name;
            parada.Latitude = paradaAtualizada.Latitude;
            parada.Longitude = paradaAtualizada.Longitude;
            parada.Linhas = paradaAtualizada.Linhas;
            

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParadaExists(parada.Id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

            return parada;
        }
        public async Task<long?> Delete(long id)
        {
            var parada = await _context.Parada.FindAsync(id);
            if (parada == null)
            {
                return null;
            }

            _context.Parada.Remove(parada);
            await _context.SaveChangesAsync();

            return parada.Id;
        }
        private bool ParadaExists(long id)
        {
            return _context.Parada.Any(e => e.Id == id);
        }
    }
}

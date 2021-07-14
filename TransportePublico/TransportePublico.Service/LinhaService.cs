using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportePublico.Data;
using TransportePublico.Domain;
using System;

namespace TransportePublico.Service
{
    public class LinhaService : ILinhaService
    {
        private readonly TransportePublicoApiContext _context;
        public LinhaService(TransportePublicoApiContext context)
        {
            _context = context;
        }
        public async Task<Linha> GetById(long id)
        {
            var linha = await _context.Linha
                .Include(l => l.Paradas)
                .Include(l => l.Veiculos)
                .FirstOrDefaultAsync(l => l.Id == id);

            return linha;
        }
        public async Task<List<Linha>> GetAll()
        {
            var linha = await _context.Linha
                .Include(l => l.Paradas)
                .Include(l => l.Veiculos)
                .ToListAsync();

            return linha;
        }
        public async Task<Linha> Save(Linha linha, List<long> paradasId)
        {
            List<Parada> paradas = new List<Parada>();

            if (paradasId != null)
            {
                foreach (var id in paradasId)
                {
                    var parada = await _context.Parada.FindAsync(paradasId);
                    if (parada == null)
                        throw new ArgumentNullException($"Parada com ID {paradasId} não existe.");

                    paradas.Add(parada);
                }
            }

            var linhaNova = new Linha
            {
                Name = linha.Name,
                Paradas = paradas
            };

            _context.Linha.Add(linhaNova);

            await _context.SaveChangesAsync();

            return linhaNova;
        }
        public async Task<Linha> Update(Linha linhaAtualizada, List<long> paradasId)
        {
            
            var linha = await _context.Linha.Include(x => x.Paradas).FirstOrDefaultAsync(x => x.Id == linhaAtualizada.Id);

            if (linha == null)
                return null;

            List<Parada> paradas = new List<Parada>();

            if (paradasId != null)
            {
                foreach (var id in paradasId)
                {
                    var parada = await _context.Parada.FindAsync(id);
                    if (parada == null)
                        throw new ArgumentNullException($"Parada com ID {id} não existe.");

                    paradas.Add(parada);
                }
            }

            linha.Paradas.Clear();
            linha.Paradas.AddRange(paradas);
            linha.Name = linhaAtualizada.Name;

            try
            {
                _context.Update(linha);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LinhaExists(linhaAtualizada.Id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
            return linha;
        }

        public async Task<long?> Delete(long id)
        {
            var linha = await _context.Linha.FindAsync(id);
            if (linha == null)
            {
                return null;
            }

            _context.Linha.Remove(linha);
            await _context.SaveChangesAsync();

            return linha.Id;
        }

        private bool LinhaExists(long id)
        {
            return _context.Linha.Any(e => e.Id == id);
        }
    }
}

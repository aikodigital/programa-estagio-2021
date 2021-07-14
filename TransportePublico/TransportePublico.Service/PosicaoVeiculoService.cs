using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportePublico.Data;
using TransportePublico.Domain;
namespace TransportePublico.Service
{
    public class PosicaoVeiculoService : IPosicaoVeiculoService
    {
        private readonly TransportePublicoApiContext _context;
        public PosicaoVeiculoService(TransportePublicoApiContext context)
        {
            _context = context;
        }
    
        public async Task<PosicaoVeiculo> GetById(long id)
        {
            var posicaoVeiculo = await _context.PosicaoVeiculo
                                .FirstOrDefaultAsync(x => x.Id == id);
            return posicaoVeiculo;
        }

        public async Task<List<PosicaoVeiculo>> GetAll()
        {
            var posicaoVeiculo = await _context.PosicaoVeiculo
                .ToListAsync();
            return posicaoVeiculo;
        }

        public async Task<PosicaoVeiculo> Save(PosicaoVeiculo posicaoVeiculo)
        {
            _context.PosicaoVeiculo.Add(posicaoVeiculo);
            await _context.SaveChangesAsync();
            return posicaoVeiculo;
        }

        public async Task<PosicaoVeiculo> Update(PosicaoVeiculo posicaoVeiculoAtualizado)
        {
            var posicaoVeiculo = await _context.PosicaoVeiculo.FindAsync(posicaoVeiculoAtualizado.Id);
            if(posicaoVeiculo == null)
            {
                return null;
            }

            posicaoVeiculo.Latitude = posicaoVeiculoAtualizado.Latitude;
            posicaoVeiculo.Longitude = posicaoVeiculoAtualizado.Longitude;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PosicaoVeiculoExists(posicaoVeiculo.Id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
            return posicaoVeiculo;
        }

        public async Task<long?> Delete(long id)
        {
            var posicaoVeiculo = await _context.PosicaoVeiculo.FindAsync(id);
            if (posicaoVeiculo == null)
            {
                return null;
            }

            _context.PosicaoVeiculo.Remove(posicaoVeiculo);
            await _context.SaveChangesAsync();

            return posicaoVeiculo.Id;
        }

        private bool PosicaoVeiculoExists(long id)
        {
            return _context.PosicaoVeiculo.Any(e => e.Id == id);
        }
    }

}

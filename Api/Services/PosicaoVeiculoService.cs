using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using System;

namespace Api.Services
{
    public class PosicaoVeiculoService : IPosicaoVeiculoService
    {
        private readonly transContext _context;
        public PosicaoVeiculoService(transContext context )
        {
            _context = context;
        }

        public async Task<posicaoVeiculo> GetById(long id)
        {
            var p = await _context.posicaoVeiculo.FirstOrDefaultAsync(x => x.Id == id);
            return p;
        }

        public async Task<List<posicaoVeiculo>> GetAll()
        {
            var a = await _context.posicaoVeiculo.ToListAsync();
            return a;
        }

        public async Task<posicaoVeiculo> Save(posicaoVeiculo posicaoVeiculo)
        {
            _context.posicaoVeiculo.Add(posicaoVeiculo);
            await _context.SaveChangesAsync();
            return posicaoVeiculo;
        }

        public async Task<posicaoVeiculo> Update(posicaoVeiculo posicaoVeiculoAtualizado)
        {
            var p = await _context.posicaoVeiculo.FindAsync(posicaoVeiculoAtualizado.Id);
            
            if(p == null)
                return null;
            
            p.Latitude = posicaoVeiculoAtualizado.Latitude;
            p.Longitude = posicaoVeiculoAtualizado.Longitude;

            try {
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!pExist(p.Id))
                {
                    return null;
                }

                else {
                    throw;
                }
            }
            return p;
        }

        public async Task<long?> Delete(long id)
        {
            var p = await _context.posicaoVeiculo.FindAsync(id);
            if(p == null)
            return null;
        
            _context.posicaoVeiculo.Remove(p);
            await _context.SaveChangesAsync();

            return p.Id;
        }
        

        private bool pExist(long id)
        {
            throw new NotImplementedException();
        }
    }
}

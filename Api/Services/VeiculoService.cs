using Microsoft.EntityFrameworkCore;
using Api.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;

namespace Api.Services
{
    public class VeiculoService : IVeiculoService
    {
        private readonly transContext _context;   

        public VeiculoService(transContext context)
        {
            _context = context;
        }

        public async Task<Veiculo> GetById(long id)
        {
            var v = await _context.Veiculo
            .Include(x => x.PosicaoVeiculo)
            .Include(x => x.Linha)
            .FirstOrDefaultAsync(x => x.Id == id);
            return v;
        }

        public async Task<Veiculo> Save(Veiculo veiculo)
        {
            _context.Veiculo.Add(veiculo);
            await _context.SaveChangesAsync();
            return veiculo;
        }

        public async Task<Veiculo> Update(Veiculo veiculoAtualizado)
        {
            var v = await _context.Veiculo.FindAsync(veiculoAtualizado);
           
            if(v == null)
            {   
                return null;
            }
            
            v.Name = veiculoAtualizado.Name;
            v.Modelo = veiculoAtualizado.Modelo;
            v.LinhaId = veiculoAtualizado.LinhaId;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if(!vExist(v.Id))
                {
                    return null;
                }
                else 
                {
                    throw;
                }
            }
            return v;
        }

        public async Task<long?> Delete(long id)
        {
            var v = await _context.Veiculo.FindAsync(id);
            if(v == null)
            {
                return null;
            }

            _context.Veiculo.Remove(v);
            await _context.SaveChangesAsync();
            return v.Id;
        }

        private bool vExist(long id)
        {
            return _context.Veiculo.Any(v => v.Id == id);
        }

        public async Task<List<Veiculo>> GetAll()
        {
            var v = await _context.Veiculo
            .Include(x => x.PosicaoVeiculo)
            .Include(x => x.Linha)
            .ToListAsync();

            return v;
        }
    }
}
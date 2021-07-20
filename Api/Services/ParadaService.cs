using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using System;


namespace Api.Services
{
    public class ParadaService : IParadaService
    {
        private readonly transContext _context;

        public ParadaService(transContext context)
        {
            _context = context;
        }        
        public async Task<Parada> GetById(long id)
        {
            var p = await _context.Parada
            .Include(p => p.Linhas)
            .FirstOrDefaultAsync(p => p.Id == id);
            return p;
        }

        public async Task<List<Parada>> GetAll()
        {
            var p = await _context.Parada.ToListAsync();

            return p;
        }
        public async Task<Parada> Save (Parada parada)
        {
            _context.Parada.Add(parada);
            await _context.SaveChangesAsync();

            return parada;
        }

        public async Task<Parada> Update(Parada paradaAtualizada)
        {
            var p = await _context.Parada.FindAsync(paradaAtualizada.Id);
            if(p == null)
            return null;

            p.Name = paradaAtualizada.Name;
            p.Latitude = paradaAtualizada.Latitude;
            p.Longitude = paradaAtualizada.Longitude;
            p.Linhas = paradaAtualizada.Linhas;


            try 
            {
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!pExists(p.Id))
                {
                    return null;
                }
                else {
                    throw;
                }
            }
            return p;
        }

        public async Task<long?> Delete (long id)
        {
            var p = await _context.Parada.FindAsync(id);
            if(p == null)
                return null;

            _context.Parada.Remove(p);
            await _context.SaveChangesAsync();
            return p.Id;
        }
        private bool pExists(long id)
        {
                        return _context.Parada.Any(v => v.Id == id);
        }
    }
}
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using System;

namespace Api.Services
{
    public class LinhaService : ILinhaService
    {
        private readonly transContext _context;
        public LinhaService(transContext context)
        {
            _context = context;
        } 

        public async Task<Linha> GetById(long id)
        {
            var v = await _context.Linha
            .Include(v => v.Paradas)
            .Include(v => v.Veiculos)
            .FirstOrDefaultAsync(v => v.Id == id);
            return v;
        }

        public async Task<List<Linha>> GetAll()
        {
            var v = await _context.Linha
            .Include(v => v.Paradas)
            .Include(v => v.Veiculos)
            .ToListAsync();
            return v;
        }

        public async Task<Linha> Save(Linha linha, List<long> paradasId)
        {
            List<Parada> paradas = new List<Parada>();

            if(paradasId != null)
            {
                foreach(var id in paradasId)
                {
                    var v = await _context.Parada.FindAsync(paradasId);
                    if(v == null)
                    throw new ArgumentNullException("Paradas com Id" + paradasId);
                    paradas.Add(v);
                }
            }

            var newLinha = new Linha
            {   
                Name = linha.Name,
                Paradas = paradas
            };

            _context.Linha.Add(newLinha);

            await _context.SaveChangesAsync();

            return newLinha;
        }

        public async Task<Linha> Update(Linha linhaAtualizada, List<long> paradaId)
        {
            var linha = await _context.Linha.Include(x => x.Paradas).FirstOrDefaultAsync(x => x.Id == linhaAtualizada.Id);

            if(linha == null)
                return null;
            
            List<Parada> paradas = new List<Parada>();

            if(paradaId != null)
            {
                foreach(var id in paradaId)
                {
                    var parada = await _context.Parada.FindAsync(id);
                    if(parada == null )
                    throw new ArgumentNullException("Parada com este id" + id + "não existe");

                    paradas.Add(parada);
                }
            }

            linha.Paradas.Clear();
            linha.Paradas.AddRange(paradas);
            linha.Name = linhaAtualizada.Name;

            try{
                _context.Update(linha);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!lExist(linhaAtualizada.Id))
                {
                    return null;
                }
                else{
                    throw;
                }
            }
            return linha;

        }

        public async Task<long?> Delete(long id)
        {
            var l = await _context.Linha.FindAsync(id);
            if(l == null)
            {
                return null;
            }

            _context.Linha.Remove(l);
            await _context.SaveChangesAsync();
            return l.Id;
        }

        private bool lExist(long id)
        {
            return _context.Linha.Any(e => e.Id == id);    
        }
    }
}
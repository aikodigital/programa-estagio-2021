using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TestBackEnd.Domain.Contracts;
using TestBackEnd.Domain.Contracts.Repositories;
using TestBackEnd.Domain.Entities;
using TestBackEnd.Infra.Context;

namespace TestBackEnd.Infra.Repositories
{
    public class BaseRepository <T> : IBaseRepository<T> where T : Base
    {
        private readonly ManagerContext _context;
        
        public BaseRepository(ManagerContext context)
        {
            _context = context;
        }
        
        public virtual async Task<T> Create(T obj)
        {
            await _context.AddAsync(obj);

            await _context.SaveChangesAsync();

            return obj;
        }

        public virtual async Task<T> Update(T obj)
        {
            _context.Entry(obj).State = EntityState.Modified;
            Console.WriteLine("id" + obj.Id);
            await _context.SaveChangesAsync();

            return obj;
        }

        public virtual async Task Remove(long id)
        {
            var obj = await Get(id);

            if(obj != null)
            {
                _context.Remove(obj);
                await _context.SaveChangesAsync();
            }
        }

        public virtual async Task<T> Get(long id)
        {
            var obj =  await _context.Set<T>()
                .AsNoTracking()
                .Where(x => x.Id == id)
                .ToListAsync();

            return obj.FirstOrDefault();
        }

        public virtual async Task<List<T>> GetAll()
        {
            return await _context.Set<T>()
                .AsNoTracking()
                .ToListAsync();
        }
    }
}
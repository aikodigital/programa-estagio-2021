using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sql;
using Microsoft.Data.SqlClient;
using System;

namespace Api.Models
{
    public class transContext : DbContext
    {
        public DbSet<Linha> Linha { get; set; }
        public DbSet<Parada> Parada { get; set; }
        public DbSet<Veiculo> Veiculo { get; set; }
        public DbSet<posicaoVeiculo> posicaoVeiculo { get; set; }

        public transContext (DbContextOptions<transContext> options)
            : base(options)
        {
        }

       

    }

    
}

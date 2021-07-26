using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sql;
using Microsoft.Data.SqlClient;
using System;
using Api.Models;
using Microsoft.Extensions.Configuration;
using System.IO;
using System.Configuration;

namespace Api.Models
{   
     public class transContext : DbContext
    {
      
        public transContext(DbContextOptions options) : base(options)
        {
        }

        public transContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);            
    }

        public DbSet<Linha> Linha { get; set; }
        public DbSet<Parada> Parada { get; set; }
        public DbSet<Veiculo> Veiculo { get; set; }
        public DbSet<posicaoVeiculo> posicaoVeiculo { get; set; }

       public transContext(DbContextOptions<transContext> options) : base(options)
       {
       }
     protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlServer(ConfigurationManager.ConnectionStrings["transSp"].ConnectionString);
    }

       
    }
}

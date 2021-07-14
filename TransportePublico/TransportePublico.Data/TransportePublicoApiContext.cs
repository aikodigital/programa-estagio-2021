using Microsoft.EntityFrameworkCore;
using TransportePublico.Domain;

namespace TransportePublico.Data
{
    public class TransportePublicoApiContext : DbContext
    {
        public TransportePublicoApiContext (DbContextOptions<TransportePublicoApiContext> options)
            : base(options)
        {
        }

        public DbSet<Linha> Linha { get; set; }

        public DbSet<Parada> Parada { get; set; }

        public DbSet<Veiculo> Veiculo { get; set; }

        public DbSet<PosicaoVeiculo> PosicaoVeiculo { get; set; }
    }
}

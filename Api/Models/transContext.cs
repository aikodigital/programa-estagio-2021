using Microsoft.EntityFrameworkCore;

namespace Api.Models
{
    public class transContext : DbContext
    {
        public transContext
        (DbContextOptions<transContext> options)
        : base (options)
        {
        }

        public DbSet<Linha> Linha { get; set; }
        public DbSet<Parada> Parada { get; set; }
        public DbSet<Veiculo> Veiculo { get; set; }
        public DbSet<posicaoVeiculo> posicaoVeiculo { get; set; }//se der erro ligado a posicao veiculo pode ser aqui o erro

    }
}
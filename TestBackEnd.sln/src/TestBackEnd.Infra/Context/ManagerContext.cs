using Microsoft.EntityFrameworkCore;
using TestBackEnd.Domain.Entities;
using TestBackEnd.Infra.Mappings;

namespace TestBackEnd.Infra.Context
{
    public class ManagerContext : DbContext
    {
        public ManagerContext() { }
        
        public ManagerContext(DbContextOptions<ManagerContext> options): base(options){}

        public DbSet<Stop> Stops { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Line> Lines { get; set; }
        
        public DbSet<VehiclePosition> VehiclePositions { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(
                "User ID=postgres;Password=postgres;Host=localhost;Port=5432;Database=test_backend;");
        }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new StopMap());
            builder.ApplyConfiguration(new LineMap());
            builder.ApplyConfiguration(new VehicleMap());
            builder.ApplyConfiguration(new VehiclePositionMap());
        }
    }
}
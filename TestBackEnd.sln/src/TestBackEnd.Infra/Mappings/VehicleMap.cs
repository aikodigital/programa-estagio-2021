using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Infra.Mappings
{
    public class VehicleMap : IEntityTypeConfiguration<Vehicle>
    {
        public void Configure(EntityTypeBuilder<Vehicle> builder)
        {
            builder.ToTable("vehicle");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .HasColumnName("name")
                .IsRequired()
                .HasColumnType("VARCHAR(40)");

            builder.Property(x => x.Model)
                .IsRequired()
                .HasColumnType("VARCHAR(40)")
                .HasColumnName("model");
        }
    }
}
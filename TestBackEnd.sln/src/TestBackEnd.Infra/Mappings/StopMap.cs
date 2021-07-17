using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Infra.Mappings
{
    public class StopMap : IEntityTypeConfiguration<Stop>
    {
        public void Configure(EntityTypeBuilder<Stop> builder)
        {
            builder.ToTable("stop");

            builder.HasKey("Id");

            builder.Property(x => x.Name)
                .IsRequired()
                .HasColumnName("name")
                .HasColumnType("VARCHAR(80)");
            
            builder.Property(x => x.Latitude)
                .IsRequired()
                .HasColumnName("latitude");
            
            builder.Property(x => x.Longitude)
                .IsRequired()
                .HasColumnName("longitude");
        }
    }
}
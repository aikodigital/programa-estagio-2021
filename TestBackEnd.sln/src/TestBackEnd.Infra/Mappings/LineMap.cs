using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Infra.Mappings
{
    public class LineMap : IEntityTypeConfiguration<Line>
    {
        public void Configure(EntityTypeBuilder<Line> builder)
        {
            builder.ToTable("line");

            builder.HasKey("Id");
            
            builder.Property(x => x.Name)
                .IsRequired()
                .HasColumnName("VARCHAR(80)");
        }
    }
}
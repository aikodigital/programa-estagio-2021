using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestBackEnd.Domain.Entities;

namespace TestBackEnd.Infra.Mappings
{
    public class VehiclePositionMap : IEntityTypeConfiguration<VehiclePosition>
    {
        public void Configure(EntityTypeBuilder<VehiclePosition> builder)
        {
        }
    }
}
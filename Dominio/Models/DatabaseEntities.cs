using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Dominio.Models
{
    public partial class DatabaseEntities : DbContext
    {
        public DatabaseEntities()
        {
        }

        public DatabaseEntities(DbContextOptions<DatabaseEntities> options)
            : base(options)
        {
        }

        public virtual DbSet<Line> Lines { get; set; }
        public virtual DbSet<LineByParade> LineByParades { get; set; }
        public virtual DbSet<Parade> Parades { get; set; }
        public virtual DbSet<Vehicle> Vehicles { get; set; }
        public virtual DbSet<VehicleLocation> VehicleLocations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=THIAGO;Initial Catalog=Aiko;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Line>(entity =>
            {
                entity.ToTable("Line");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DisabledAt).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(255);
            });

            modelBuilder.Entity<LineByParade>(entity =>
            {
                entity.ToTable("LineByParade");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DisabledAt).HasColumnType("datetime");

                entity.HasOne(d => d.Line)
                    .WithMany(p => p.LineByParades)
                    .HasForeignKey(d => d.LineId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_LineByParade_LineId");

                entity.HasOne(d => d.Parade)
                    .WithMany(p => p.LineByParades)
                    .HasForeignKey(d => d.ParadeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_LineByParade_ParadeId");
            });

            modelBuilder.Entity<Parade>(entity =>
            {
                entity.ToTable("Parade");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DisabledAt).HasColumnType("datetime");

                entity.Property(e => e.Latitude).HasColumnType("decimal(18, 6)");

                entity.Property(e => e.Longitude).HasColumnType("decimal(18, 6)");

                entity.Property(e => e.Name).HasMaxLength(255);
            });

            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.ToTable("Vehicle");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DisabledAt).HasColumnType("datetime");

                entity.Property(e => e.Model).HasMaxLength(255);

                entity.Property(e => e.Name).HasMaxLength(255);

                entity.HasOne(d => d.Line)
                    .WithMany(p => p.Vehicles)
                    .HasForeignKey(d => d.LineId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Vehicle_LineId");
            });

            modelBuilder.Entity<VehicleLocation>(entity =>
            {
                entity.ToTable("VehicleLocation");

                entity.Property(e => e.CreatedAt).HasColumnType("datetime");

                entity.Property(e => e.DisabledAt).HasColumnType("datetime");

                entity.Property(e => e.Latitude).HasColumnType("decimal(18, 6)");

                entity.Property(e => e.Longitude).HasColumnType("decimal(18, 6)");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.VehicleLocations)
                    .HasForeignKey(d => d.VehicleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_VehicleLocation_VehicleId");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

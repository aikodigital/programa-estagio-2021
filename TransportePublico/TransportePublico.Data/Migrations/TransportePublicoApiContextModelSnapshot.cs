﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TransportePublico.Data;

namespace TransportePublico.Data.Migrations
{
    [DbContext(typeof(TransportePublicoApiContext))]
    partial class TransportePublicoApiContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("LinhaParada", b =>
                {
                    b.Property<long>("LinhasId")
                        .HasColumnType("bigint");

                    b.Property<long>("ParadasId")
                        .HasColumnType("bigint");

                    b.HasKey("LinhasId", "ParadasId");

                    b.HasIndex("ParadasId");

                    b.ToTable("LinhaParada");
                });

            modelBuilder.Entity("TransportePublico.Domain.Linha", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Linha");
                });

            modelBuilder.Entity("TransportePublico.Domain.Parada", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Latitude")
                        .HasColumnType("float");

                    b.Property<double>("Longitude")
                        .HasColumnType("float");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Parada");
                });

            modelBuilder.Entity("TransportePublico.Domain.PosicaoVeiculo", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Latitude")
                        .HasColumnType("float");

                    b.Property<double>("Longitude")
                        .HasColumnType("float");

                    b.Property<long>("VeiculoId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("VeiculoId")
                        .IsUnique();

                    b.ToTable("PosicaoVeiculo");
                });

            modelBuilder.Entity("TransportePublico.Domain.Veiculo", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<long>("LinhaId")
                        .HasColumnType("bigint");

                    b.Property<string>("Modelo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("LinhaId");

                    b.ToTable("Veiculo");
                });

            modelBuilder.Entity("LinhaParada", b =>
                {
                    b.HasOne("TransportePublico.Domain.Linha", null)
                        .WithMany()
                        .HasForeignKey("LinhasId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TransportePublico.Domain.Parada", null)
                        .WithMany()
                        .HasForeignKey("ParadasId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TransportePublico.Domain.PosicaoVeiculo", b =>
                {
                    b.HasOne("TransportePublico.Domain.Veiculo", null)
                        .WithOne("PosicaoVeiculo")
                        .HasForeignKey("TransportePublico.Domain.PosicaoVeiculo", "VeiculoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TransportePublico.Domain.Veiculo", b =>
                {
                    b.HasOne("TransportePublico.Domain.Linha", "Linha")
                        .WithMany("Veiculos")
                        .HasForeignKey("LinhaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Linha");
                });

            modelBuilder.Entity("TransportePublico.Domain.Linha", b =>
                {
                    b.Navigation("Veiculos");
                });

            modelBuilder.Entity("TransportePublico.Domain.Veiculo", b =>
                {
                    b.Navigation("PosicaoVeiculo");
                });
#pragma warning restore 612, 618
        }
    }
}

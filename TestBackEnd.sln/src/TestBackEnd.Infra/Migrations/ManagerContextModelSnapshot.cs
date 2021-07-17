﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using TestBackEnd.Infra.Context;

namespace TestBackEnd.Infra.Migrations
{
    [DbContext(typeof(ManagerContext))]
    partial class ManagerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "6.0.0-preview.5.21301.9")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("LineStop", b =>
                {
                    b.Property<long>("LinesId")
                        .HasColumnType("bigint");

                    b.Property<long>("StopsId")
                        .HasColumnType("bigint");

                    b.HasKey("LinesId", "StopsId");

                    b.HasIndex("StopsId");

                    b.ToTable("LineStop");
                });

            modelBuilder.Entity("TestBackEnd.Domain.Entities.Line", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("VARCHAR(80)");

                    b.HasKey("Id");

                    b.ToTable("line");
                });

            modelBuilder.Entity("TestBackEnd.Domain.Entities.Stop", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<double>("Latitude")
                        .HasColumnType("double precision")
                        .HasColumnName("latitude");

                    b.Property<double>("Longitude")
                        .HasColumnType("double precision")
                        .HasColumnName("longitude");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("VARCHAR(80)")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.ToTable("stop");
                });

            modelBuilder.Entity("TestBackEnd.Domain.Entities.Vehicle", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<long>("LineId")
                        .HasColumnType("bigint");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasColumnType("VARCHAR(40)")
                        .HasColumnName("model");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("VARCHAR(40)")
                        .HasColumnName("name");

                    b.HasKey("Id");

                    b.HasIndex("LineId");

                    b.ToTable("vehicle");
                });

            modelBuilder.Entity("TestBackEnd.Domain.Entities.VehiclePosition", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<double>("Latitude")
                        .HasColumnType("double precision");

                    b.Property<double>("Longitude")
                        .HasColumnType("double precision");

                    b.Property<long>("VehicleId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("VehicleId")
                        .IsUnique();

                    b.ToTable("VehiclePositions");
                });

            modelBuilder.Entity("LineStop", b =>
                {
                    b.HasOne("TestBackEnd.Domain.Entities.Line", null)
                        .WithMany()
                        .HasForeignKey("LinesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("TestBackEnd.Domain.Entities.Stop", null)
                        .WithMany()
                        .HasForeignKey("StopsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TestBackEnd.Domain.Entities.Vehicle", b =>
                {
                    b.HasOne("TestBackEnd.Domain.Entities.Line", "Line")
                        .WithMany("Vehicles")
                        .HasForeignKey("LineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Line");
                });

            modelBuilder.Entity("TestBackEnd.Domain.Entities.VehiclePosition", b =>
                {
                    b.HasOne("TestBackEnd.Domain.Entities.Vehicle", "Vehicle")
                        .WithOne("VehiclePosition")
                        .HasForeignKey("TestBackEnd.Domain.Entities.VehiclePosition", "VehicleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Vehicle");
                });

            modelBuilder.Entity("TestBackEnd.Domain.Entities.Line", b =>
                {
                    b.Navigation("Vehicles");
                });

            modelBuilder.Entity("TestBackEnd.Domain.Entities.Vehicle", b =>
                {
                    b.Navigation("VehiclePosition");
                });
#pragma warning restore 612, 618
        }
    }
}

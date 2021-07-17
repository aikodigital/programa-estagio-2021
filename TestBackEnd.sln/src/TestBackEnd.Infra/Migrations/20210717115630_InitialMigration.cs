using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace TestBackEnd.Infra.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "line",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    VARCHAR80 = table.Column<string>(name: "VARCHAR(80)", type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_line", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "stop",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "VARCHAR(80)", nullable: false),
                    latitude = table.Column<double>(type: "double precision", nullable: false),
                    longitude = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_stop", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "vehicle",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    name = table.Column<string>(type: "VARCHAR(40)", nullable: false),
                    model = table.Column<string>(type: "VARCHAR(40)", nullable: false),
                    LineId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_vehicle", x => x.Id);
                    table.ForeignKey(
                        name: "FK_vehicle_line_LineId",
                        column: x => x.LineId,
                        principalTable: "line",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "LineStop",
                columns: table => new
                {
                    LinesId = table.Column<long>(type: "bigint", nullable: false),
                    StopsId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LineStop", x => new { x.LinesId, x.StopsId });
                    table.ForeignKey(
                        name: "FK_LineStop_line_LinesId",
                        column: x => x.LinesId,
                        principalTable: "line",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_LineStop_stop_StopsId",
                        column: x => x.StopsId,
                        principalTable: "stop",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VehiclePositions",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Latitude = table.Column<double>(type: "double precision", nullable: false),
                    Longitude = table.Column<double>(type: "double precision", nullable: false),
                    VehicleId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VehiclePositions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VehiclePositions_vehicle_VehicleId",
                        column: x => x.VehicleId,
                        principalTable: "vehicle",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LineStop_StopsId",
                table: "LineStop",
                column: "StopsId");

            migrationBuilder.CreateIndex(
                name: "IX_vehicle_LineId",
                table: "vehicle",
                column: "LineId");

            migrationBuilder.CreateIndex(
                name: "IX_VehiclePositions_VehicleId",
                table: "VehiclePositions",
                column: "VehicleId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LineStop");

            migrationBuilder.DropTable(
                name: "VehiclePositions");

            migrationBuilder.DropTable(
                name: "stop");

            migrationBuilder.DropTable(
                name: "vehicle");

            migrationBuilder.DropTable(
                name: "line");
        }
    }
}

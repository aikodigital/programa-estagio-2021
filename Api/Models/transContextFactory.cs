using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sql;
using Microsoft.Data.SqlClient;
using System;
using Api.Models;
using Microsoft.Extensions.Configuration;
using System.IO;



namespace Api.Models
{
    public class transContextFactory : IDbContextFactory<transContext>
    {
        transContext IDbContextFactory<transContext>.CreateDbContext()
        {
             var optionsBuilder = new DbContextOptionsBuilder<transContext>();
            optionsBuilder.UseSqlServer("Data Source=mssqllocaldb");
            return new transContext(optionsBuilder.Options);
        }
    }
}
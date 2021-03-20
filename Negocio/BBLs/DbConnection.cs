using Dominio.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Negocio.BBLs
{
    public class DbConnection
    {
        protected DatabaseEntities db;
        public DbConnection()
        {
            db = new DatabaseEntities();
        }

        protected void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            Dispose(disposing);
        }
    }
}

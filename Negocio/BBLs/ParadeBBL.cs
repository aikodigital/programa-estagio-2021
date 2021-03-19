using Comunicacao.ViewObjects;
using Dominio.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Negocio.BBLs
{
    public class ParadeBBL : DbConnection
    {

        public ParadeBBL() : base() { }

        public ParadeListVO ParadeList()
        {
            try
            {
                ParadeListVO response = new ParadeListVO();

                List<Parade> paradeList = db.Parades.Where(x => x.DisabledAt == null).ToList();
                foreach (Parade item in paradeList)
                {
                    ParadeVO aux = new ParadeVO
                    {
                        Id = item.Id,
                        Name = item.Name,
                        Longitude = item.Longitude,
                        Latitude = item.Latitude

                    };

                    response.List.Add(aux);
                }
                return response;


            }
            catch (Exception ex)
            {

                return null;
            }
        }

        public ParadeVO GetParade(int Id)
        {
            try
            {
                Parade item = db.Parades.Where(x => x.Id == Id).FirstOrDefault();
                ParadeVO response = new ParadeVO()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Latitude = item.Latitude,
                    Longitude = (decimal)item.Longitude
                };

                return response;
            }
            catch (Exception ex)
            {

                return null;
            }
        }

        public bool ParadeCreate(ParadeVO model)
        {
            try
            {
                Parade item = new Parade()
                {
                    CreatedAt = DateTime.Now,
                    Name = model.Name,
                    Latitude = model.Latitude,
                    Longitude = model.Longitude
                };

                db.Parades.Add(item);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
        }


        public bool ParadeEdit(ParadeVO model)
        {
            try
            {
                Parade item = db.Parades.Where(x => x.Id == model.Id).FirstOrDefault();
                item.Latitude = model.Latitude;
                item.Longitude = model.Longitude;
                item.Name = model.Name;

                db.Entry(item).State = EntityState.Modified;
                db.SaveChanges();
                return true;

            }
            catch (Exception ex)
            {

                return false;
            }
        }

    
        public bool ParadeRemove(int Id)
        {
            try
            {
                Parade item = db.Parades.Where(x => x.Id == Id).FirstOrDefault();

                item.DisabledAt = DateTime.Now;

                db.Entry(item).State = EntityState.Modified;
                db.SaveChanges();

                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
        }

    }
}

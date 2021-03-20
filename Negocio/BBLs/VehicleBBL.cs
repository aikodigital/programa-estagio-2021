using Comunicacao.ViewObjects;
using Dominio.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Negocio.BBLs
{
    public class VehicleBBL : DbConnection
    {


        public VehicleBBL() : base() { }

        public VehicleListVO VehicleList()
        {
            try
            {
                VehicleListVO response = new VehicleListVO();

                List<Vehicle> VehicleList = db.Vehicles.Where(x => x.DisabledAt == null).ToList();
                foreach (Vehicle item in VehicleList)
                {
                    VehicleVO aux = new VehicleVO
                    {
                        Id = item.Id,
                        Name = item.Name,
                        Model = item.Model,
                        LineId = item.LineId

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

        public VehicleVO GetVehicle(int Id)
        {
            try
            {
                Vehicle item = db.Vehicles.Where(x => x.Id == Id).FirstOrDefault();
                VehicleVO response = new VehicleVO()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Model = item.Model,
                    LineId = item.LineId
                };

                return response;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public bool VehicleCreate(VehicleVO model)
        {
            try
            {
                Vehicle item = new Vehicle()
                {
                    CreatedAt = DateTime.Now,
                    Name = model.Name,
                    Model = model.Model,
                    LineId = model.LineId
                };

                db.Vehicles.Add(item);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool VehicleEdit(VehicleVO model)
        {
            try
            {
                Vehicle item = db.Vehicles.Where(x => x.Id == model.Id).FirstOrDefault();

                item.Name = model.Name;
                item.Model = model.Model;
                item.LineId = model.LineId;


                db.Entry(item).State = EntityState.Modified;
                db.SaveChanges();
                return true;

            }
            catch (Exception ex)
            {
                return false;
            }
        }


        public bool VehicleRemove(int Id)
        {
            try
            {
                Vehicle item = db.Vehicles.Where(x => x.Id == Id).FirstOrDefault();

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

        public VehicleLocationVO GetVehicleLocation(int VehicleId)
        {
            try
            {
                VehicleLocation item = db.VehicleLocations.Where(x => x.VehicleId == VehicleId).FirstOrDefault();

                VehicleLocationVO response = new VehicleLocationVO()
                {
                    Latitude = item.Latitude,
                    Longitude = item.Longitude,
                    VehicleId = item.VehicleId
                };

                return response;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public bool VehicleLocationCreate(VehicleLocationVO model)
        {
            try
            {
                VehicleLocation item = new VehicleLocation()
                {
                    Latitude = model.Latitude,
                    Longitude = model.Longitude,
                    VehicleId = model.VehicleId,
                    CreatedAt = DateTime.Now
                };

                db.VehicleLocations.Add(item);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool VehicleLocationEdit(VehicleLocationVO model)
        {
            try
            {
                VehicleLocation item = db.VehicleLocations.Where(x => x.VehicleId == model.VehicleId).FirstOrDefault();

                item.Latitude = model.Latitude;
                item.Longitude = model.Longitude;


                db.Entry(item).State = EntityState.Modified;
                db.SaveChanges();
                return true;

            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool VehicleLocationRemove(int VehicleId)
        {
            try
            {
                VehicleLocation item = db.VehicleLocations.Where(x => x.VehicleId == VehicleId).FirstOrDefault();

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

        public VehicleListVO VehiclesByLineList(int LineId)
        {
            try
            {

                List<Vehicle> list = db.Vehicles.Where(x => x.LineId == LineId).AsNoTracking().ToList();

                VehicleListVO response = new VehicleListVO();

                foreach (var item in list)
                {
                    response.List.Add(new VehicleVO
                    {
                        Id = item.Id,
                        Name = item.Name,
                        Model = item.Model,
                        LineId = item.LineId
                    });
                }

                return response;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}

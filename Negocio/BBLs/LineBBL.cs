using Comunicacao.ViewObjects;
using Dominio.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Negocio.BBLs
{
    public class LineBBL : DbConnection
    {

        public LineBBL() : base() { }

        public LineListVO LineList()
        {
            try
            {
                LineListVO response = new LineListVO();

                List<Line> lineList = db.Lines.Where(x => x.DisabledAt == null).ToList();
                foreach (Line item in lineList)
                {
                    LineVO aux = new LineVO
                    {
                        Id = item.Id,
                        Name = item.Name

                    };

                    response.List.Add(aux);
                }
                return response;


            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, "BBL: " + Constantes_Mensagens_Banner.ErrorBannerList, ex);
                return null;
            }
        }
        public LineVO GetLine(int Id)
        {
            try
            {
                Line item = db.Lines.Where(x => x.Id == Id).FirstOrDefault();

                LineVO response = new LineVO()
                {
                    Id = item.Id,
                    Name = item.Name
                };

                return response;
            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, "BBL: " + Constantes_Mensagens_Banner.ErrorBannerRemove, ex);
                return null;
            }
        }


        public bool LineCreate(LineVO model)
        {
            try
            {
                Line item = new Line()
                {
                    Name = model.Name,
                    CreatedAt = DateTime.Now,
                };

                db.Lines.Add(item);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, "BBL: " + Constantes_Mensagens_Banner.ErrorBannerSave, ex);
                return false;
            }
        }

        public bool LineEdit(LineVO model)
        {
            try
            {
                Line item = db.Lines.Where(x => x.Id == model.Id).FirstOrDefault();
                item.Name = model.Name;

                db.Entry(item).State = EntityState.Modified;
                db.SaveChanges();
                return true;

            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, "BBL: " + Constantes_Mensagens_Banner.ErrorBannerPrepareEdit, ex);
                return false;
            }
        }


        public bool LineRemove(int Id)
        {
            try
            {
                Line item = db.Lines.Where(x => x.Id == Id).FirstOrDefault();

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

        public LineListVO LinesByParadeList(int ParadeId)
        {
            try
            {

                var list = db.Lines.Join(db.LineByParades.Where(x => x.ParadeId == ParadeId && x.DisabledAt == null), line => line.Id, lb => lb.LineId, (line, lb) => new { Id = line.Id, Name = line.Name }).ToList();

                LineListVO response = new LineListVO();

                foreach (var item in list)
                {
                    response.List.Add(new LineVO
                    {
                        Id = item.Id,
                        Name = item.Name
                    });
                }

                return response;
            }
            catch (Exception ex)
            {

                return null;
            }
        }

        public bool LinkLineToParade(LineByParadeVO model)
        {
            try
            {
                LineByParade item = new LineByParade()
                {
                    LineId = model.LineId,
                    ParadeId = model.ParadeId,
                    CreatedAt = DateTime.Now,
                };

                db.LineByParades.Add(item);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {

                return false;
            }
        }

        public bool UnlinkLineAndParade(int Id)
        {
            try
            {
                LineByParade item = db.LineByParades.Where(x => x.Id == Id).FirstOrDefault();

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

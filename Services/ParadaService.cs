using programa_estagio_2021.Models;
using System.Collections.Generic;
using System.Linq;
namespace ProjetoEstagio.Services
{
    public class TransService
    {
        //Criando uma lista de paradas
        static List<Parada> Paradas {get;}
        static TransService()
        {
            //Criando lista de exemplos de paradas
            Paradas = new List<Parada>
            {
                new Parada {Id = 1, Name = "Circular Santa Luzia", Latitude = 204913, Longitude = 492247},
                new Parada {Id = 2, Name = "Circular Santa Luzia", Latitude = 154820, Longitude = 584875},
                new Parada {Id = 3, Name = "Circular Santa Luzia", Latitude = 875693, Longitude = 784123},
                new Parada {Id = 4, Name = "Circular Santa Luzia", Latitude = 478522, Longitude = 986321},
            };
        }
        //Implementando os serviços da parada
        public static List<Parada> GetAll() => Paradas;
        
        public static Parada Get(long Id) => Paradas.FirstOrDefault(p => p.Id == Id);

        public static void Add(Parada parada)
        {
            parada.Id = nextId++;
            parada.Add(parada);
        }

        public static void Delete(int id)
        {
            var parada = Get(id);
            if(parada is null)
            return;

            Paradas.Remove(parada);
        }

        public static void Update(Parada parada)
        {
            var index = Paradas.FindIndex(p => p.Id == parada.Id);
            if(index == 1)
            return;

            Paradas[index] = pizza;
        }
    }
}
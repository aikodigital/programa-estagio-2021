using System;
using System.Collections;
using programa_estagio_2021.Models;

namespace programa_estagio_2021.Models
{
    class Linha 
    {
        public long Id { get; set;}
        public string Name {get; set;}
        public int[] Paradas = new int[5];

        public Linha()
        {
        }
    }
}
namespace programa_estagio_2021.Models
{
    public class Linha
    {
        public long Id {get; set;}
        public string Name {get; set;}
        public int[] Paradas {get; set;}
    
        public Linha(){
        }

    }
}
using System.ComponentModel.DataAnnotations;

namespace TestBackEnd.API.ViewModel.StopViewModel
{
    public class CreateStopViewModel
    {
        [Required(ErrorMessage = "O nome não pode ser vazio.")]
        public string Name { get;  set; }
        
        public double Latitude { get;  set; }

        public double Longitude { get;  set; }
    }
}
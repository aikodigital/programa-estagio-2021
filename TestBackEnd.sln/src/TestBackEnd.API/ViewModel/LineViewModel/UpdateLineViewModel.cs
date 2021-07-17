using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using TestBackEnd.API.ViewModel.StopViewModel;
using TestBackEnd.API.ViewModel.VehicleViewModel;

namespace TestBackEnd.API.ViewModel.LineViewModel
{
    public class UpdateLineViewModel
    {
        [Required(ErrorMessage = "Id não pode ser nulo.")]
        public long Id { get; set; }
        
        [Required(ErrorMessage = "O nome não pode ser vazio.")]
        public string Name { get; set; }

        public ICollection<StopReferenceView> Stops { get; set; }

        public ICollection<VehicleReferenceView> Vehicles { get; set; }
    }
}
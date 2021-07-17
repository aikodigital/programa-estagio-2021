using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using TestBackEnd.API.ViewModel.StopViewModel;

namespace TestBackEnd.API.ViewModel.LineViewModel
{
    public class CreateLineViewModel
    {
        [Required(ErrorMessage = "O nome não pode ser vazio.")]
        public string Name { get; set; }

        public ICollection<StopReferenceView> Stops { get; set; }
    }
}
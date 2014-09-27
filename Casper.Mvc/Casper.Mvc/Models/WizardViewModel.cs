using System.ComponentModel.DataAnnotations;

namespace Casper.Mvc.Models
{
    public class WizardViewModel
    {
        public int Id { get; set; }
        public string Question { get; set; }
        [Required]
        public string Answer { get; set; }

    }
}
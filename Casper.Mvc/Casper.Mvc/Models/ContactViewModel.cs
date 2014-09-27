using System.ComponentModel.DataAnnotations;

namespace Casper.Mvc.Models
{
    public class ContactViewModel
    {
        [Required, Display(Name = "Contact Name")]
        public string ContactName { get; set; }
        [Required, EmailAddress, Display(Name = "Email Address")]
        public string EmailAddress { get; set; }
    }
}
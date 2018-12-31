using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Dtos
{
    public class UserToRegister
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specifya password between 4 and 8 characters")]
        public string Password { get; set; }
        public string Email { get; set; }
        public string Surname { get; set; }
        public string Name { get; set; }

    }
}
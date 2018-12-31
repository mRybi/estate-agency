using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Dtos
{
    public class UserToLogin
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specifya password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}
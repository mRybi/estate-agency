using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Domain
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Surename { get; set; }
    }
}

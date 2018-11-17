using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Domain
{ 
    public class Bid
    {
        public int Id { get; set; }
        public int AucitionId { get; set; }
        public int UserId { get; set; }
        public double Offer { get; set; }
        public DateTime BidDateTime { get; set; }
    }
}

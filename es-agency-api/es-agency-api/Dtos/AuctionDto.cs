using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Dtos
{
    public class AuctionDto
    {
        public int Id { get; set; }
        public double ActualPrice { get; set; }
        public double StartingPrice { get; set; }
    }
}

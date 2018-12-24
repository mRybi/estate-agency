using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Dtos
{
    public class AuctionItemDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int AuctionType { get; set; }
        public string PhotoUrl { get; set; }
        public double Measurement { get; set; }
        public AuctionDto ItemAuction { get; set; }
    }
}

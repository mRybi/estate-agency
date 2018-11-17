using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Domain
{
    public class AuctionItem
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public AuctionItemType AuctionType { get; set; }
        public string PhotoUrl { get; set; }
        public double Measurement { get; set; }
        public Auction ItemAuction { get; set; }

    }

    public enum AuctionItemType
    {
        House = 1,
        Ground = 2,
        Flat = 3,
        Shop = 4
    }
}

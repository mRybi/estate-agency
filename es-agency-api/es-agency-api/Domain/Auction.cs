using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Domain
{
    public class Auction
    {
        public int Id { get; set; }
        public int AuctionItemId { get; set; }
        public double ActualPrice { get; set; }
        public int BiddersCount { get; set; }
        public DateTime startTime { get; set; }
        public DateTime endTime { get; set; }
        public int WinningBidId { get; set; }
        public double StartingPrice { get; set; }
    }
}

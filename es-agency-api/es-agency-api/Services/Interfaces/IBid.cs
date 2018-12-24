using es_agency_api.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Services.Interfaces
{
    public interface IBid
    {
        Task Add(Bid bid);
        Task Delete(int id);
        Task<IEnumerable<Bid>> GetAllBids();
        Task<Bid> GetBid(int id);
        Task Update(Bid bid);
    }
}

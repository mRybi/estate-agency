using es_agency_api.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Services.Interfaces
{
    public interface IAuction
    {
        Task Add(Auction auction);
        Task Delete(int id);
        Task<IEnumerable<Auction>> GetAllAuctions();
        Task<Auction> GetAuction(int id);
        Task Update(Auction auction);
    }
}

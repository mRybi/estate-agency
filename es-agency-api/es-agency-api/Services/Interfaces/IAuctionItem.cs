using es_agency_api.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Services.Interfaces
{
    public interface IAuctionItem
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<IEnumerable<AuctionItem>> GetAllAuctionItems();
        Task<AuctionItem> GetAuctionItem(int id);
        Task Update(AuctionItem auctionItem);
        Task<bool> SaveAll();
    }
}

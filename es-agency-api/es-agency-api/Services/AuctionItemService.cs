using es_agency_api.Domain;
using es_agency_api.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Services
{
    public class AuctionItemService : IAuctionItem
    {
        private readonly EstateAgencyDbContext _estateAgencyDbContext;

        public AuctionItemService(EstateAgencyDbContext estateAgencyDbContext)
        {
            _estateAgencyDbContext = estateAgencyDbContext;
        }

        public void Add<T>(T entity) where T : class
        {
            _estateAgencyDbContext.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _estateAgencyDbContext.Remove(entity);
        }

        public async Task<IEnumerable<AuctionItem>> GetAllAuctionItems()
        {
            return await _estateAgencyDbContext.AuctionItems.ToListAsync();
        }

        public async Task<AuctionItem> GetAuctionItem(int id)
        {
            return await _estateAgencyDbContext.AuctionItems.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task Update(AuctionItem auctionItem)
        {
            var oldItem = await GetAuctionItem(auctionItem.Id);
            oldItem = auctionItem;
            await _estateAgencyDbContext.SaveChangesAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await _estateAgencyDbContext.SaveChangesAsync() > 0;
        }
    }
}

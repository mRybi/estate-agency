using es_agency_api.Domain;
using es_agency_api.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace es_agency_api.Services
{
    public class UserService : IUser
    {
        private readonly EstateAgencyDbContext _estateAgencyDbContext;

        public UserService(EstateAgencyDbContext estateAgencyDbContext)
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

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _estateAgencyDbContext.Users.ToListAsync();
        }

        public async Task<User> GetUser(int id)
        {
            return await _estateAgencyDbContext.Users.FirstOrDefaultAsync(user => user.Id  == id);                          
        }

        public async Task<bool> SaveAll()
        {
            return await _estateAgencyDbContext.SaveChangesAsync() > 0;
        }

        public async Task Update(User user)
        {
            var oldUser = await _estateAgencyDbContext.Users.FirstOrDefaultAsync(u => u.Id == user.Id);

            oldUser = user;
        }
    }
}

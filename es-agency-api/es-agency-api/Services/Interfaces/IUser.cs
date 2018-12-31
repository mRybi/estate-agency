using es_agency_api.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Services.Interfaces
{
    public interface IUser
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetUser(int id);
        Task Update(User user);
        Task<bool> SaveAll();
    }
}

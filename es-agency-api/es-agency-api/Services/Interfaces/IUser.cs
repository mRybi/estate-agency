using es_agency_api.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Services.Interfaces
{
    public interface IUser
    {
        Task Add(User user);
        Task Delete(int id);
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetUser(int id);
        Task Update(User user);
        Task<string> Login(string email, string password);
        Task<string> Register(User user);
    }
}

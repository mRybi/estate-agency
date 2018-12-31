using es_agency_api.Domain;
using es_agency_api.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace es_agency_api.Services
{
    public class AuthService : IAuth
    {
        private readonly EstateAgencyDbContext _estateAgencyDbContext;

        public AuthService(EstateAgencyDbContext estateAgencyDbContext)
        {
            _estateAgencyDbContext = estateAgencyDbContext;
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _estateAgencyDbContext.Users.FirstOrDefaultAsync(u => u.Username == username);

            if(user == null)
                return null;
            if(!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;
            else return user;
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computeHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for(int i =0; i<computeHash.Length; i++){
                    if(computeHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _estateAgencyDbContext.Users.AddAsync(user);
            await _estateAgencyDbContext.SaveChangesAsync();

            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()) {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExists(string username)
        {
            if(await _estateAgencyDbContext.Users.AnyAsync(u => u.Username == username))
                return true;
            return false;
        }
    }
}

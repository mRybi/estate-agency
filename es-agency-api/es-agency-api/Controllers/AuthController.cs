using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using es_agency_api.Services.Interfaces;
using es_agency_api.Dtos;
using es_agency_api.Domain;

namespace es_agency_api.Controllers
{
    [Route("api/[controller]")]
    public class AuthController: Controller
    {
        private readonly IAuth _repo;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;



        public AuthController(IAuth repo, IConfiguration config, IMapper mapper)
        {        
            _repo = repo;
            _config = config;
            _mapper = mapper;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserToRegister userToRegister)
        {
            //validate request
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!string.IsNullOrEmpty(userToRegister.Username))
            {
                userToRegister.Username = userToRegister.Username.ToLower();
            }

            if (await _repo.UserExists(userToRegister.Username))
            {
                ModelState.AddModelError("Username", "Username already exists");
                return BadRequest(ModelState);
            }
               

            var userToCreate = _mapper.Map<User>(userToRegister);

            var createdUser = await _repo.Register(userToCreate, userToRegister.Password);


            return Ok(createdUser);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserToLogin userToLogin)
        {
            var userFromRepo = await _repo.Login(userToLogin.Username.ToLower(), userToLogin.Password);

            if (userFromRepo == null)
                return Unauthorized();
            //generate token
            var tokenHandler = new JwtSecurityTokenHandler();
            //var key = Encoding.ASCII.GetBytes(_config.GetSection("AppSettings:Token").Value);
            var key = Encoding.ASCII.GetBytes("super secret key"); //zmiana bo testowy hostserver nie radzi sobie z czytaniem appsettings

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                    new Claim(ClaimTypes.Name, userFromRepo.Username)
                }),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);
            var toReturn = new 
            {
                TokenString = tokenString,
                User = userFromRepo
            };


            return Ok(toReturn);
        }
    }
}
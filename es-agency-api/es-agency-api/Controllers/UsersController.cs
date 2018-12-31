using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using es_agency_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace es_agency_api.Controllers
{
    [Route("api/[controller]")]
    public class UserController: Controller
    {
        private readonly IUser _repo;
        private readonly IMapper _mapper;

        public UserController(IUser repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetAllUsers();

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);

            if (user == null)
                return NotFound();

            return Ok(user);
        }
    }
}
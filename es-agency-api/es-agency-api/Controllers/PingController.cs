using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Controllers
{
    [Route("api/[controller]")]
    public class PingController: Controller
    {

        [HttpGet]
        public IActionResult Ping()
        {
            return Ok("Pong");
        }
    }
}

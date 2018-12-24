using AutoMapper;
using es_agency_api.Domain;
using es_agency_api.Dtos;
using es_agency_api.Services;
using es_agency_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.Controllers
{
    [Route("api/[controller]")]
    public class AuctionItemController : Controller
    {
        private readonly IAuctionItem _auctionItemService;
        private readonly IMapper _mapper;

        public AuctionItemController(IAuctionItem auctionItemService, IMapper mapper)
        {
            _auctionItemService = auctionItemService;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var auctions = await _auctionItemService.GetAllAuctionItems();

            if (auctions != null)
                return Ok(auctions);

            return BadRequest("No auction item to retrive");
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] AuctionItemDto auctionItemDto)
        {
            var auctionItem = _mapper.Map<AuctionItem>(auctionItemDto);
            var auctionItemAlreadyExists = await _auctionItemService.GetAuctionItem(auctionItem.Id);
            if (auctionItemDto != null && auctionItemAlreadyExists == null)
                _auctionItemService.Add(auctionItem);
            else
                return BadRequest("theare is already that item");

            if (await _auctionItemService.SaveAll())
                return Ok();

            return BadRequest("Something went wrong");
        }

    }
}

using AutoMapper;
using es_agency_api.Domain;
using es_agency_api.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace es_agency_api.helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Auction, AuctionDto>();
            CreateMap<AuctionDto, Auction>();
            CreateMap<AuctionItem, AuctionItemDto>();
            CreateMap<AuctionItemDto, AuctionItem>();
        }
    }
}

export class AuctionItemDto {
    id: number;
    userId: number;
description: string;
title: string;
location: string;
photoUrl: string;
auctionType: AuctionItemType;
mesurement: number;
itemAuction: null;
}

export enum AuctionItemType {
    House = 1,
    Ground = 2,
    Flat = 3,
    Shop = 4
}
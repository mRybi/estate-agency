using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace esagencyapi.Migrations
{
    public partial class FixedNameing : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Projects_AuctionItems_AuctionItemId",
                table: "Projects");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Projects",
                table: "Projects");

            migrationBuilder.RenameTable(
                name: "Projects",
                newName: "Auctions");

            migrationBuilder.RenameIndex(
                name: "IX_Projects_AuctionItemId",
                table: "Auctions",
                newName: "IX_Auctions_AuctionItemId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Auctions",
                table: "Auctions",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Auctions_AuctionItems_AuctionItemId",
                table: "Auctions",
                column: "AuctionItemId",
                principalTable: "AuctionItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Auctions_AuctionItems_AuctionItemId",
                table: "Auctions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Auctions",
                table: "Auctions");

            migrationBuilder.RenameTable(
                name: "Auctions",
                newName: "Projects");

            migrationBuilder.RenameIndex(
                name: "IX_Auctions_AuctionItemId",
                table: "Projects",
                newName: "IX_Projects_AuctionItemId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Projects",
                table: "Projects",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_AuctionItems_AuctionItemId",
                table: "Projects",
                column: "AuctionItemId",
                principalTable: "AuctionItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

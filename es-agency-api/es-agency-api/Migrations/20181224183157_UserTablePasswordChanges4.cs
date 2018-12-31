using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace esagencyapi.Migrations
{
    public partial class UserTablePasswordChanges4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "AuctionItems",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "AuctionItems",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "AuctionItems",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Location",
                table: "AuctionItems");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "AuctionItems");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "AuctionItems");
        }
    }
}

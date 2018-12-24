using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using es_agency_api.Domain;
using es_agency_api.helpers;
using es_agency_api.Services;
using es_agency_api.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace es_agency_api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var dbConn = Configuration.GetValue<string>("DB_CONN") ?? "Default";

            //services.AddDbContext<EstateAgencyDbContext>(options =>
            //   options.UseSqlServer(Configuration.GetConnectionString(dbConn)));

            services.AddDbContext<EstateAgencyDbContext>(options =>
               options.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Database=EstateAgency;Trusted_Connection=True;MultipleActiveResultSets=true"));

            services.AddSingleton<IMapper>(new Mapper(new MapperConfiguration(cfg => cfg.AddProfile<AutoMapperProfiles>())));
            services.AddScoped<IAuctionItem, AuctionItemService>();
            services.AddMvc();

            services.AddCors();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());
            app.UseMvc();
        }
    }
}

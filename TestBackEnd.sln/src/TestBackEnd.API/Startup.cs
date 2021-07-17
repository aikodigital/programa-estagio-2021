using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using TestBackEnd.API.ViewModel.LineViewModel;
using TestBackEnd.API.ViewModel.StopViewModel;
using TestBackEnd.API.ViewModel.VehiclePositionViewModel;
using TestBackEnd.API.ViewModel.VehicleViewModel;
using TestBackEnd.Application.DTO;
using TestBackEnd.Application.Interfaces;
using TestBackEnd.Application.Services;
using TestBackEnd.Domain.Contracts.InterfacesDomainServices;
using TestBackEnd.Domain.Contracts.Repositories;
using TestBackEnd.Domain.DomainServices;
using TestBackEnd.Domain.Entities;
using TestBackEnd.Infra.Context;
using TestBackEnd.Infra.Repositories;

namespace TestBackEnd.API
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

            #region DI
            services.AddSingleton(d => Configuration);
            services.AddDbContext<ManagerContext>(options => options.UseNpgsql(Configuration["ConnectionStrings:TEST_BACKEND"]), ServiceLifetime.Transient);
            
            #region StopDI
            
            services.AddScoped<IStopRepository, StopRepository>();
            services.AddScoped<IStopService, StopService>();
            services.AddScoped<IStopDomainService, StopDomainService>();
            
            #endregion

            #region LineDI
            
            services.AddScoped<ILineRepository, LineRepository>();
            services.AddScoped<ILineService, LineService>();
            services.AddScoped<ILineDomainService, LineDomainService>();
            
            #endregion

            #region VehicleDI

            services.AddScoped<IVehicleRepository, VehicleRepository>();
            services.AddScoped<IVehicleService, VehicleService>();
            services.AddScoped<IVehicleDomainService, VehicleDomainService>();
            
            #endregion

            #region VehiclePositionDI

            services.AddScoped<IVehiclePositionRepository, VehiclePositionRepository>();
            services.AddScoped<IVehiclePositionDomainService, VehiclePositionDomainService>();
            services.AddScoped<IVehiclePositionService, VehiclePositionService>();
            
            #endregion
            #endregion

            #region AutoMapper
            
            var autoMapperConfig = new MapperConfiguration(cfg =>
            {
                //Stop
                cfg.CreateMap<Stop, StopDTO>().ReverseMap();
                cfg.CreateMap<CreateStopViewModel, StopDTO>().ReverseMap();
                cfg.CreateMap<UpdateStopViewModel, StopDTO>().ReverseMap();
                cfg.CreateMap<StopReferenceView, StopDTO>().ReverseMap();
                
                //Line
                cfg.CreateMap<Line, LineDTO>().ReverseMap();
                cfg.CreateMap<CreateLineViewModel, LineDTO>().ReverseMap();
                cfg.CreateMap<UpdateLineViewModel, LineDTO>().ReverseMap();
                
                //Vehicle
                cfg.CreateMap<Vehicle, VehicleDTO>().ReverseMap();
                cfg.CreateMap<CreateVehicleViewModel, VehicleDTO>().ReverseMap();
                cfg.CreateMap<UpdateVehicleViewModel, VehicleDTO>().ReverseMap();
                cfg.CreateMap<VehicleReferenceView, VehicleDTO>().ReverseMap();

                //VehiclePosition
                cfg.CreateMap<CreateVehiclePositionViewModel, VehiclePositionDTO>().ReverseMap();
                cfg.CreateMap<VehiclePositionDTO, VehiclePosition>().ReverseMap();
                cfg.CreateMap<UpdateVehiclePositionViewModel, VehiclePositionDTO>().ReverseMap();

            });
            services.AddSingleton(autoMapperConfig.CreateMapper());
            
            #endregion

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "TestBackEnd.API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TestBackEnd.API v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

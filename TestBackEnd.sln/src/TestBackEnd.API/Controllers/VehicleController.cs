using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TestBackEnd.API.ViewModel;
using TestBackEnd.API.ViewModel.VehicleViewModel;
using TestBackEnd.Application.DTO;
using TestBackEnd.Application.Interfaces;

namespace TestBackEnd.API.Controllers
{
    [ApiController]
    public class VehicleController : ControllerBase
    {
        private readonly IMapper _mapper;

        private readonly IVehicleService _vehicleService;

        public VehicleController(IMapper mapper, IVehicleService vehicleService)
        {
            _mapper = mapper;
            _vehicleService = vehicleService;
        }

        [HttpPost]
        [Route("/test-backend/v1/vehicle/create")]
        public async Task<IActionResult> Create([FromBody] CreateVehicleViewModel createVehicleViewModel)
        {
            try
            {
                var vehicleDto = _mapper.Map<VehicleDTO>(createVehicleViewModel);
                
                var vehicleCreated = await _vehicleService.Create(vehicleDto);
                
                return Ok(new ResultViewModel
                {
                    Message = "Veículo cadastrado com sucesso.",
                    Data = vehicleCreated,
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPut]
        [Route("/test-backend/v1/vehicle/update")]
        public async Task<IActionResult> Update([FromBody] UpdateVehicleViewModel updateVehicleViewModel)
        {
            try
            {
                var vehicleDto = _mapper.Map<VehicleDTO>(updateVehicleViewModel);

                var vehicle = await _vehicleService.Update(vehicleDto);

                return Ok(new ResultViewModel
                {
                    Message = "Veículo atualizado com sucesso.", 
                    Data = vehicle, 
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpDelete]
        [Route("/test-backend/v1/vehicle/remove/{id}")]
        public async Task<IActionResult> Remove(long id)
        {
            try
            {
                await _vehicleService.Remove(id);

                return Ok(new ResultViewModel
                {
                    Message = "Veículo removido com sucesso.", 
                    Data = null, 
                    Success = true
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        [HttpGet]
        [Route("/test-backend/v1/vehicle/get/{id}")]
        public async Task<IActionResult> Get(long id)
        {
            try
            {
                var vehicleDto = await _vehicleService.Get(id);

                return Ok(new ResultViewModel
                {
                    Message = "Veículo encontrado com sucesso.", 
                    Data = vehicleDto, 
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet]
        [Route("/test-backend/v1/vehicle/get-all")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var vehicles = await _vehicleService.GetAll();
                return Ok(new ResultViewModel
                    {
                        Message = "Todos os Veículos encontrados com sucesso", 
                        Data = vehicles, 
                        Success = true
                    });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet]
        [Route("/test-backend/v1/vehicle/get-by-line/{id}")]
        public async Task<IActionResult> GetVehicleByLine(long id)
        {
            try
            {
                var vehicles = await _vehicleService.GetVehiclesByLine(id);
                return Ok(new ResultViewModel
                {
                    Message = "Consulta feita com sucesso.", 
                    Data = vehicles, 
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
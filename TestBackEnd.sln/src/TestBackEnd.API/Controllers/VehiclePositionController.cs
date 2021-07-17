using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TestBackEnd.API.ViewModel;
using TestBackEnd.API.ViewModel.VehiclePositionViewModel;
using TestBackEnd.Application.DTO;
using TestBackEnd.Application.Interfaces;

namespace TestBackEnd.API.Controllers
{
    [ApiController]
    public class VehiclePositionController : ControllerBase
    {
        private readonly IMapper _mapper;

        private readonly IVehiclePositionService _vehiclePositionService;

        public VehiclePositionController(IMapper mapper, IVehiclePositionService vehiclePositionService)
        {
            _mapper = mapper;
            _vehiclePositionService = vehiclePositionService;
        }
        
        [HttpPost]
        [Route("/test-backend/v1/vehicle-position/create")]
        public async Task<IActionResult> Create([FromBody] CreateVehiclePositionViewModel createVehiclePositionViewModel)
        {
            try
            {
                var vehiclePositionDto = _mapper.Map<VehiclePositionDTO>(createVehiclePositionViewModel);

                var vehiclePositionCreated = await _vehiclePositionService.Create(vehiclePositionDto);
                
                return Ok(new ResultViewModel
                {
                    Message = "Posição de veículo cadastrada com sucesso.",
                    Data = vehiclePositionCreated,
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPut]
        [Route("/test-backend/v1/vehicle-position/update")]
        public async Task<IActionResult> Update([FromBody] UpdateVehiclePositionViewModel updateVehiclePositionViewModel)
        {
            try
            {
                var vehiclePositionDto = _mapper.Map<VehiclePositionDTO>(updateVehiclePositionViewModel);

                var vehiclePositionCreated= await _vehiclePositionService.Update(vehiclePositionDto);

                return Ok(new ResultViewModel
                {
                    Message = "Posição de Veículo atualizado com sucesso.", 
                    Data = vehiclePositionCreated, 
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpDelete]
        [Route("/test-backend/v1/vehicle-position/remove/{id}")]
        public async Task<IActionResult> Remove(long id)
        {
            try
            {
                await _vehiclePositionService.Remove(id);

                return Ok(new ResultViewModel
                {
                    Message = "Posição de veículo removida com sucesso.", 
                    Data = null, 
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet]
        [Route("/test-backend/v1/vehicle-position/get/{id}")]
        public async Task<IActionResult> Get(long id)
        {
            try
            {
                var vehiclePositionDtoDto = await _vehiclePositionService.Get(id);

                return Ok(new ResultViewModel
                {
                    Message = "Posição de veículo encontrado com sucesso.", 
                    Data = vehiclePositionDtoDto, 
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet]
        [Route("/test-backend/v1/vehicle-position/get-all")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var vehiclePositionsDto = await _vehiclePositionService.GetAll();
                return Ok(new ResultViewModel
                    {
                        Message = "Todas as Posições de Veículos encontradas com sucesso.", 
                        Data = vehiclePositionsDto, 
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
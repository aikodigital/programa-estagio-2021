using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TestBackEnd.API.ViewModel;
using TestBackEnd.API.ViewModel.StopViewModel;
using TestBackEnd.Application.DTO;
using TestBackEnd.Application.Interfaces;

namespace TestBackEnd.API.Controllers
{
    [ApiController]
    public class StopController: ControllerBase
    {
        private readonly IMapper _mapper;

        private readonly IStopService _stopService;

        public StopController(IMapper mapper, IStopService stopService)
        {
            _mapper = mapper;
            _stopService = stopService;
        }

        [HttpPost]
        [Route("/test-backend/v1/stop/create")]
        public async Task<IActionResult> Create([FromBody] CreateStopViewModel stopViewModel)
        {
            try
            {
                var stopDto = _mapper.Map<StopDTO>(stopViewModel);
                var stop = await _stopService.Create(stopDto);

                return Ok(new ResultViewModel
                {
                    Message = "Parada criada com sucesso.", 
                    Data = stop, 
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPut]
        [Route("/test-backend/v1/stop/update")]
        public async Task<IActionResult> Update([FromBody] UpdateStopViewModel updateStopViewModel)
        {
            try
            {
                var stopDto = _mapper.Map<StopDTO>(updateStopViewModel);

                var stopDtoUpdated = await _stopService.Update(stopDto);
                
                return Ok(new ResultViewModel
                {
                    Message = "Parada atualizada com sucesso.",
                    Data = stopDtoUpdated,
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpDelete]
        [Route("/test-backend/v1/stop/remove/{id}")]
        public async Task<IActionResult> Remove(long id)
        {
            try
            {
                await _stopService.Remove(id);
                
                return Ok(new ResultViewModel
                {
                    Message = "Parada excluída com sucesso.", 
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
        [Route("/test-backend/v1/stop/get/{id}")]
        public async Task<IActionResult> Get(long id)
        {
            try
            {
                var stopDto = await _stopService.Get(id);
                
                return Ok(new ResultViewModel
                {
                    Message = "Parada encontrada com sucesso.",
                    Data = stopDto,
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet]
        [Route("/test-backend/v1/stop/get-all")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var stopsDto = await _stopService.GetAll();
                
                return Ok(new ResultViewModel
                {
                    Message = "Paradas encontradas com sucesso.",
                    Data = stopsDto,
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
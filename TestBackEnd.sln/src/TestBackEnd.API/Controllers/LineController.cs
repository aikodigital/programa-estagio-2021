using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TestBackEnd.API.ViewModel;
using TestBackEnd.API.ViewModel.LineViewModel;
using TestBackEnd.Application.DTO;
using TestBackEnd.Application.Interfaces;

namespace TestBackEnd.API.Controllers
{
    [ApiController]
    public class LineController : ControllerBase
    {
        private readonly IMapper _mapper;

        private readonly ILineService _lineService;

        public LineController(IMapper mapper, ILineService lineService)
        {
            _mapper = mapper;
            _lineService = lineService;
        }

        [HttpPost]
        [Route("/test-backend/v1/line/create")]
        public async Task<IActionResult> Create([FromBody] CreateLineViewModel createLineViewModel)
        {
            try
            {
                var lineDto = _mapper.Map<LineDTO>(createLineViewModel);
                var lineCreated = await _lineService.Create(lineDto);
                return Ok(new ResultViewModel
                {
                    Message = "Linha criada com sucesso.",
                    Data = lineCreated,
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPut]
        [Route("/test-backend/v1/line/update")]
        public async Task<IActionResult> Update([FromBody] UpdateLineViewModel updateLineViewModel)
        {
            try
            {
                var lineDto = _mapper.Map<LineDTO>(updateLineViewModel);
                var line = await _lineService.Update(lineDto);
                
                return Ok(new ResultViewModel
                {
                    Message = "Linha atualizada com sucesso.",
                    Data = line,
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpDelete]
        [Route("/test-backend/v1/line/remove/{id}")]
        public async Task<IActionResult> Remove(long id)
        {
            try
            {
                await _lineService.Remove(id);
                return Ok(new ResultViewModel
                {
                    Message = "Linha excluída com sucesso.", 
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
        [Route("/test-backend/v1/line/get/{id}")]
        public async Task<IActionResult> Get(long id)
        {
            try
            {
                var lineDto = await _lineService.Get(id);

                return Ok(new ResultViewModel
                {
                    Message = "Linha encontrada com sucesso.", 
                    Data = lineDto, 
                    Success = true
                });
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet]
        [Route("/test-backend/v1/line/get-all")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var linesDto = await _lineService.GetAll();

                return Ok(new ResultViewModel
                {
                    Message = "Todas as linhas encontradas com sucesso.", 
                    Data = linesDto, 
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
        [Route("/test-backend/v1/line/get/lines-by-stop")]
        public async Task<IActionResult> GetLinesByStop(long id)
        {
            try
            {
                var lines = await _lineService.GetLinesByStop(id);
                return Ok(new ResultViewModel
                {
                    Message = "Consulta feita com sucesso.", 
                    Data = lines, 
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
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Api.Dtos;
using Api.Services;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PosicaoVeiculoController : ControllerBase
    {
        private readonly IPosicaoVeiculoService _posicaoVeiculoService;

        public PosicaoVeiculoController(IPosicaoVeiculoService posicaoVeiculoService)
        {
            _posicaoVeiculoService = posicaoVeiculoService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<posicaoVeiculo>>> GetPosicaoVeiculo()
        {
            return await _posicaoVeiculoService.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<posicaoVeiculo>> GetPosicaoVeiculo(long id)
        {
            var pVeiculo = await _posicaoVeiculoService.GetById(id);

            if(pVeiculo == null)
            return NotFound();

            return pVeiculo; 
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPosicaoVeiculo(long id, posicaoVeiculo posicaoVeiculo)
        {
            if(id != posicaoVeiculo.Id)
            return BadRequest();

            var pVeiculo = new posicaoVeiculo
            {
                Latitude = posicaoVeiculo.Latitude,
                Longitude = posicaoVeiculo.Longitude,
                VeiculoId = posicaoVeiculo.VeiculoId,
                Id = posicaoVeiculo.Id
            };

            var vAtualizado = await _posicaoVeiculoService.Update(posicaoVeiculo);

            if(vAtualizado == null)
            return NotFound();

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<posicaoVeiculo>> PostPosicaoVeiculo(PostPosicaoVeiculoDto postPosicaoVeiculo)
        {
            var pVeiculo = new posicaoVeiculo
            {
                Latitude = postPosicaoVeiculo.Latitude,
                Longitude = postPosicaoVeiculo.Longitude,
                VeiculoId = postPosicaoVeiculo.VeiculoId
            };

            await _posicaoVeiculoService.Save(pVeiculo);

            return CreatedAtAction("GetPosicaoVeiculo", new {id = pVeiculo.Id}, postPosicaoVeiculo);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePosicaoVeiculo(long id)
        {
            var pVeiculo = await _posicaoVeiculoService.Delete(id);
            if(pVeiculo == null)
            return NotFound();

            return NoContent();
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportePublico.Api.Dtos;
using TransportePublico.Data;
using TransportePublico.Domain;
using TransportePublico.Service;

namespace TransportePublico.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PosicaoVeiculosController : ControllerBase
    {
        private readonly IPosicaoVeiculoService _posicaoVeiculoService;

        public PosicaoVeiculosController(IPosicaoVeiculoService posicaoVeiculoService)
        {
            _posicaoVeiculoService = posicaoVeiculoService;
        }

        // GET: api/PosicaoVeiculos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PosicaoVeiculo>>> GetPosicaoVeiculo()
        {
            return await _posicaoVeiculoService.GetAll();
        }

        // GET: api/PosicaoVeiculos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PosicaoVeiculo>> GetPosicaoVeiculo(long id)
        {
            var posicaoVeiculo = await _posicaoVeiculoService.GetById(id);

            if (posicaoVeiculo == null)
            {
                return NotFound();
            }

            return posicaoVeiculo;
        }

        // PUT: api/PosicaoVeiculos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPosicaoVeiculo(long id, PosicaoVeiculo posicaoVeiculo)
        {
            if (id != posicaoVeiculo.Id)
            {
                return BadRequest();
            }
            var pVeiculo = new PosicaoVeiculo
            {
                Latitude = posicaoVeiculo.Latitude,
                Longitude = posicaoVeiculo.Longitude,
                VeiculoId = posicaoVeiculo.VeiculoId,
                Id = posicaoVeiculo.Id
            };

           var posicaoVeiculoAtualizado = await _posicaoVeiculoService.Update(pVeiculo);
           
            if (posicaoVeiculoAtualizado == null)
            return NotFound();

            return NoContent();
        }

        // POST: api/PosicaoVeiculos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PosicaoVeiculo>> PostPosicaoVeiculo(PostPosicaoVeiculoDto postPosicaoVeiculo)
        {
            var pVeiculo = new PosicaoVeiculo
            {
                Latitude = postPosicaoVeiculo.Latitude,
                Longitude = postPosicaoVeiculo.Longitude,
                VeiculoId = postPosicaoVeiculo.VeiculoId
            };

           await _posicaoVeiculoService.Save(pVeiculo);
            
           return CreatedAtAction("GetPosicaoVeiculo", new { id = pVeiculo.Id }, postPosicaoVeiculo);
        }

        // DELETE: api/PosicaoVeiculos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePosicaoVeiculo(long id)
        {
            var posicaoVeiculo = await _posicaoVeiculoService.Delete(id);
            if (posicaoVeiculo == null)
            {
                return NotFound();
            }
            return NoContent();
        }

        
    }
}

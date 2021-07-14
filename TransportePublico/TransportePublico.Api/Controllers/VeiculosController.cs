using Microsoft.AspNetCore.Mvc;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using TransportePublico.Api.Dtos;
using TransportePublico.Domain;
using TransportePublico.Service;

namespace TransportePublico.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeiculosController : ControllerBase
    {
        private readonly IVeiculoService _veiculoService;

        public VeiculosController(IVeiculoService veiculoService)
        {
            _veiculoService = veiculoService;
        }

        // GET: api/Veiculos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VeiculoDto>>> GetVeiculo()
        {
            var veiculos = await _veiculoService.GetAll();
            var veiculosDto = veiculos.Select(x => new VeiculoDto
            {
                Id = x.Id,
                Name = x.Name,
                Modelo = x.Modelo,
                PosicaoVeiculo = new PosicaoVeiculoDto
                {
                    Id = x.PosicaoVeiculo.Id,
                    Latitude = x.PosicaoVeiculo.Latitude,
                    Longitude = x.PosicaoVeiculo.Longitude
                },
                Linha = new LinhaDto { Id = x.Linha.Id, Name = x.Linha.Name }
            });
            return Ok(veiculosDto);
        }

        // GET: api/Veiculos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VeiculoDto>> GetVeiculo(long id)
        {
            var veiculo = await _veiculoService.GetById(id);

            if (veiculo == null)
            {
                return NotFound();
            }

            var veiculoDto = new VeiculoDto
            {
                Id = veiculo.Id,
                Name = veiculo.Name,
                Modelo = veiculo.Modelo,
                PosicaoVeiculo = new PosicaoVeiculoDto
                {
                    Id = veiculo.PosicaoVeiculo.Id,
                    Latitude = veiculo.PosicaoVeiculo.Latitude,
                    Longitude = veiculo.PosicaoVeiculo.Longitude
                },
                Linha = new LinhaDto { Id = veiculo.Linha.Id, Name = veiculo.Linha.Name }
            };

            return veiculoDto;
        }

        // PUT: api/Veiculos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVeiculo(long id, PutVeiculoDto putVeiculoDto)
        {
            if (id != putVeiculoDto.Id)
            {
                return BadRequest();
            }

            var veiculoAtualizado = new Veiculo
            {
                Id = putVeiculoDto.Id,
                Name = putVeiculoDto.Name,
                Modelo = putVeiculoDto.Modelo,
                LinhaId = putVeiculoDto.LinhaId,
            };

            var veiculo = await _veiculoService.Update(veiculoAtualizado);

            if (veiculo == null)
                return NotFound();

            return NoContent();
        }

        // POST: api/Veiculos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Veiculo>> PostVeiculo(PostVeiculoDto postVeiculoDto)
        {
            var veiculo = new Veiculo
            {
                Name = postVeiculoDto.Name,
                Modelo = postVeiculoDto.Modelo,
                LinhaId = postVeiculoDto.LinhaId,
                PosicaoVeiculo = new PosicaoVeiculo
                {
                    Latitude = postVeiculoDto.PosicaoVeiculo.Latitude,
                    Longitude = postVeiculoDto.PosicaoVeiculo.Longitude
                }
            };

            await _veiculoService.Save(veiculo);

            return CreatedAtAction("GetVeiculo", new { id = veiculo.Id }, postVeiculoDto);
        }

        // DELETE: api/Veiculos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVeiculo(long id)
        {
            var veiculo = await _veiculoService.Delete(id);
            if (veiculo == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}

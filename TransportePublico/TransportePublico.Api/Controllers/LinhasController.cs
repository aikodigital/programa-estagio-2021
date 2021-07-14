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
    public class LinhasController : ControllerBase
    {
        private readonly ILinhaService _linhaService;

        public LinhasController(ILinhaService linhaService)
        {
            _linhaService = linhaService;
        }

        // GET: api/Linhas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LinhaDto>>> GetLinha()
        {
            var linhas = await _linhaService.GetAll();            

            var linhasDto = linhas.Select(x => new LinhaDto
            {
                Id = x.Id,
                Name = x.Name,
                Paradas = x.Paradas.Select(y => new ParadaDto
                {
                    Id = y.Id,
                    Name = y.Name,
                    Latitude = y.Latitude,
                    Longitude = y.Longitude
                }).ToList()
            });

            return Ok(linhasDto);
        }

        // GET: api/Linhas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GetLinhaDto>> GetLinha(long id)
        {
            var linha = await _linhaService.GetById(id);

            if (linha == null)
            {
                return NotFound();
            }

            var linhasDto = new GetLinhaDto
            {
                Id = linha.Id,
                Name = linha.Name,
                Paradas = linha.Paradas.Select(y => new ParadaDto
                {
                    Id = y.Id,
                    Name = y.Name,
                    Latitude = y.Latitude,
                    Longitude = y.Longitude
                }).ToList(),
                    VeiculoDtos = linha.Veiculos.Select(y => new VeiculoDto
                {
                    Id = y.Id,
                    Name = y.Name
                }).ToList()
            };

            return linhasDto;
        }

        // PUT: api/Linhas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLinha(long id, PutLinhaDto putLinhaDto)
        {
            if (id != putLinhaDto.Id)
            {
                return BadRequest();
            }

            var linha = new Linha
            {
                Id = putLinhaDto.Id,
                Name = putLinhaDto.Name                           
            };

            var linhaAtualizada = await _linhaService.Update(linha, putLinhaDto.Paradas);

            if (linhaAtualizada == null)
                return NotFound();

            return NoContent();
        }

        // POST: api/Linhas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Linha>> PostLinha(PostLinhaDto postLinhaDto)
        {
            var linha = new Linha
            {
                Name = postLinhaDto.Name
            };

            var linhaNova = await _linhaService.Save(linha, postLinhaDto?.Paradas);

            return CreatedAtAction("GetLinha", new { id = linhaNova.Id }, postLinhaDto);
        }

        // DELETE: api/Linhas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLinha(long id)
        {
            var linha = await _linhaService.Delete(id);
            if (linha == null)
            {
                return NotFound();
            }

            return NoContent();
        }        
    }
}

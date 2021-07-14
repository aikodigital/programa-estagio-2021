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
    public class ParadasController : ControllerBase
    {
        private readonly IParadaService _paradaService;

        public ParadasController(IParadaService paradaService)
        {
            _paradaService = paradaService;
        }


        // GET: api/Paradas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ParadaDto>>> GetParada()
        {
            var paradas = await _paradaService.GetAll();
            var paradasDto = paradas.Select(x => new ParadaDto
            {
                Id = x.Id,
                Name = x.Name,
                Latitude = x.Latitude,
                Longitude = x.Longitude
            });
            return Ok(paradasDto);
        }

        // GET: api/Paradas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ParadaDto>> GetParada(long id)
        {
            var parada = await _paradaService.GetById(id);

            if (parada == null)
            {
                return NotFound();
            }
            var paradaDto = new ParadaDto
            {
                Id = parada.Id,
                Name = parada.Name,
                Latitude = parada.Latitude,
                Longitude = parada.Longitude,
                Linhas = parada.Linhas.Select(l => new LinhaDto
                {
                    Id = l.Id,
                    Name = l.Name
                }).ToList()
            };

            return paradaDto;
        }

        // PUT: api/Paradas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParada(long id, ParadaDto paradaDto)
        {
            if (id != paradaDto.Id)
            {
                return BadRequest();
            }

            var parada = new Parada
            {
                Id = paradaDto.Id,
                Name = paradaDto.Name,
                Latitude = paradaDto.Latitude,
                Longitude = paradaDto.Longitude,
            };

            var paradaAtualizada = await _paradaService.Update(parada);

            if (paradaAtualizada == null)
                return NotFound();

            return NoContent();
        }

        // POST: api/Paradas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Parada>> PostParada(PostParadaDto postParadaDto)
        {
            var parada = new Parada
            {
                Name = postParadaDto.Name,
                Latitude = postParadaDto.Latitude,
                Longitude = postParadaDto.Longitude
            };
            await _paradaService.Save(parada);

            return CreatedAtAction("GetParada", new { id = parada.Id }, postParadaDto);
        }

        // DELETE: api/Paradas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParada(long id)
        {
            var parada = await _paradaService.Delete(id);
            if (parada == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}

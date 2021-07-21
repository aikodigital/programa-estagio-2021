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
    public class LinhaController : ControllerBase
    {
        private readonly ILinhaService _linhaService;

        public LinhaController(ILinhaService linhaService)
        {
            _linhaService = linhaService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LinhaDto>>> GetLinha()
        {
            var l = await _linhaService.GetAll();

            var lDto = l.Select(x => new LinhaDto
            {
                Id = x.Id,
                Name = x.Name,
                Paradas = x.Paradas.Select(a => new ParadaDto
                {
                    Id = a.Id,
                    Name = a.Name,
                    Latitude = a.Latitude,
                    Longitude = a.Longitude
                }).ToList()
            });
            return Ok(lDto);
        }

        [HttpGet("{id")]
        public async Task<ActionResult<GetLinhaDto>> GetLinha(long id)
        {
            var l = await _linhaService.GetById(id);

            if(l == null)
                return NotFound();

            var lDto = new GetLinhaDto
            {
                Id = l.Id,
                Name = l.Name,
                Paradas = l.Paradas.Select(a => new ParadaDto
                {
                    Id = a.Id,
                    Name = a.Name,
                    Latitude = a.Latitude,
                    Longitude = a.Longitude
                }).ToList(),
                VeiculoDtos = l.Veiculos.Select(a => new VeiculoDto{
                    Id = a.Id,
                    Name = a.Name
                }).ToList()
            };
            return lDto;
        }

        [HttpPut("{id")]
        public async Task<IActionResult> PutLinha(long id, PutLinhaDto putLinhaDto)
        {
            if(id != putLinhaDto.Id)
                return BadRequest();

            var l = new Linha
            {
                Id = putLinhaDto.Id,
                Name = putLinhaDto.Name
            };            

            var lAtualizada = await _linhaService.Update(l, putLinhaDto.Paradas);

            if(lAtualizada == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Linha>> PostLinha(PostLinhaDto postLinhaDto)
        {
            var l = new Linha
            {
                Name = postLinhaDto.Name
            };

            var lNova = await _linhaService.Save(l, postLinhaDto?.Paradas);
            return CreatedAtAction("GetLinha", new { id = lNova.Id}, postLinhaDto);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLinha(long id)
        {
            var l = await _linhaService.Delete(id);
            if(l == null)
            return NotFound();

            return NoContent();
        }
    }
}
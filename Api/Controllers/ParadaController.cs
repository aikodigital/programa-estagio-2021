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
    public class ParadaController : ControllerBase
    {
        private readonly IParadaService _paradaService;

        public ParadaController(IParadaService paradaService)
        {
            _paradaService = paradaService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ParadaDto>>> GetParada()
        {
            var par = await _paradaService.GetAll();
            var parDto = par.Select(x => new ParadaDto
            {
                Id = x.Id,
                Name = x.Name,
                Latitude = x.Latitude,
                Longitude = x.Longitude
            });
            return Ok(parDto);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ParadaDto>> GetParada(long id)
        {
            var p = await _paradaService.GetById(id);

            if(p == null)
            return NotFound();

            var pp = new ParadaDto
            {
                Id = p.Id,
                Name = p.Name,
                Latitude = p.Latitude,
                Longitude = p.Longitude,
                Linhas = p.Linhas.Select(a => new LinhaDto
                {
                    Id = a.Id,
                    Name = a.Name
                }).ToList()
            };
            return pp;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutParada(long id, ParadaDto paradaDto)
        {
            if(id != paradaDto.Id)
            {
                return BadRequest();  
            }
            
            var p = new Parada
            {
                Id = paradaDto.Id,
                Name = paradaDto.Name,
                Latitude = paradaDto.Latitude,
                Longitude = paradaDto.Longitude
            };

            var pAtualizado = await _paradaService.Update(p);

            if(pAtualizado == null){
            return NotFound();
            }
            return NoContent(); 
        }

        [HttpPost]
        public async Task<ActionResult<Parada>> PostParada(PostParadDto postParadDto)
        {
            var p = new Parada
            {
                Name = postParadDto.Name,
                Latitude = postParadDto.Latitude,
                Longitude = postParadDto.Longitude
            };
            await _paradaService.Save(p);
            return CreatedAtAction("GetParada", new {id = p.Id}, postParadDto);
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteParada(long id)
        {
            var p = await _paradaService.Delete(id);
            if(p == null)
                return NotFound();
            
            return NoContent();


        }


    }

    }

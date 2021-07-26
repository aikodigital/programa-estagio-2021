using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using Microsoft.AspNetCore;
using Microsoft.EntityFrameworkCore;
using Api.Dtos;
using Api.Services;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeiculoController : ControllerBase
    {   
        private readonly IVeiculoService _veiculoService;

        public VeiculoController(IVeiculoService veiculoService)
        {
            _veiculoService = veiculoService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<VeiculoDto>>> GetVeiculo()
        {
            var v = await _veiculoService.GetAll();
            var vDto = v.Select(a => new VeiculoDto
            {
                Id = a.Id,
                Name = a.Name,
                Modelo = a.Modelo,
                PosicaoVeiculo = new PosicaoVeiculoDto
                {
                    Id = a.PosicaoVeiculo.Id,
                    Latitude = a.PosicaoVeiculo.Latitude,
                    Longitude = a.PosicaoVeiculo.Longitude
                },
                Linha = new LinhaDto {Id = a.Linha.Id, Name = a.Linha.Name}
            });
            return Ok(vDto);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<VeiculoDto>> GetVeiculo(long id)
        {
            var v = await _veiculoService.GetById(id);

            if(v == null)
            return NotFound();

            var vDto= new VeiculoDto
            {
                Id = v.Id,
                Name = v.Name,
                Modelo = v.Modelo,
                PosicaoVeiculo = new PosicaoVeiculoDto
                {
                    Id = v.PosicaoVeiculo.Id,
                    Latitude = v.PosicaoVeiculo.Latitude,
                    Longitude = v.PosicaoVeiculo.Longitude
                },
                Linha = new LinhaDto {Id = v.Linha.Id, Name = v.Linha.Name}
            };
            return vDto;
        } 

        [HttpPut("{id}")]
        public async Task<IActionResult> PutVeiculo(long id, PutVeiculo putVeiculo)
        {
            if(id != putVeiculo.Id)
            return BadRequest();

            var vAtualizado = new Veiculo
            {
                Id = putVeiculo.Id,
                Name = putVeiculo.Name,
                Modelo = putVeiculo.Modelo,
                LinhaId = putVeiculo.LinhaId,
            };

            var v = await _veiculoService.Update(vAtualizado);

            if(v == null){
                return NotFound();
            }
            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Veiculo>> PostVeiculo(PostVeiculoDto postVeiculoDto)
        {
            var v = new Veiculo
            {
                Name = postVeiculoDto.Name,
                Modelo = postVeiculoDto.Modelo,
                LinhaId = postVeiculoDto.LinhaId,
                PosicaoVeiculo = new posicaoVeiculo
                {
                    Latitude = postVeiculoDto.PosicaoVeiculo.Latitude,
                    Longitude = postVeiculoDto.PosicaoVeiculo.Longitude
                }
            };

            await _veiculoService.Save(v);

            return CreatedAtAction("GetVeiculo", new {id = v.Id}, postVeiculoDto);
        }

        [HttpDelete("{id")]
        public async Task<IActionResult> DeleteVeiculo(long id)
        {
            var v = await _veiculoService.Delete(id);
            if(v == null)
            return NotFound();

            return NoContent();
        }
    }
}
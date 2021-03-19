using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Comunicacao.APIObjects;
using Comunicacao.ViewObjects;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Negocio.BBLs;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ParadeController : ControllerBase

    {

        [Route("ParadeList")]
        [HttpGet]
        public IActionResult ParadeList()
        {
            try
            {
                APIResponse response = new APIResponse();
                ParadeBBL pBBL = new ParadeBBL();
                response.Object = pBBL.ParadeList();

                if (response.Object != null)
                    response.Success = true;
                else
                    response.Message = ErrorMessages.Parade.ErrorParadeList;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, Constantes_Mensagens_Banner.ErrorBannerList, ex);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("GetParade")]
        [HttpGet]
        public IActionResult GetParade(int? Id)
        {
            try
            {
                APIResponse response = new APIResponse();
                ParadeBBL pBBL = new ParadeBBL();

                if (Id == null || Id <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                response.Object = pBBL.GetParade((int)Id);

                if (response.Object == null)
                {
                    response.Success = false;
                    response.Message = ErrorMessages.Parade.ErrorGetParade;
                }

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, Constantes_Mensagens_Banner.ErrorBannerSave, ex);
                return StatusCode(StatusCodes.Status500InternalServerError);

            }
        }

        [Route("ParadeCreate")]
        [HttpPost]
        public IActionResult ParadeCreate([FromBody] ParadeVO Data)
        {
            try
            {
                APIResponse response = new APIResponse();
                ParadeBBL pBBL = new ParadeBBL();

                response.Success = pBBL.ParadeCreate(Data);

                if (!response.Success)
                    response.Message = ErrorMessages.Parade.ErrorParadeEdit;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, Constantes_Mensagens_Banner.ErrorBannerSave, ex);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("ParadeEdit")]
        [HttpPut]
        public IActionResult ParadeEdit([FromBody] ParadeVO Data)
        {
            try
            {
                APIResponse response = new APIResponse();
                ParadeBBL pBBL = new ParadeBBL();

                response.Success = pBBL.ParadeEdit(Data);

                if (!response.Success)
                    response.Message = ErrorMessages.Parade.ErrorParadeEdit;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, Constantes_Mensagens_Banner.ErrorBannerSave, ex);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
        [Route("ParadeRemove")]
        [HttpDelete]
        public IActionResult ParadeRemove(int? Id)
        {
            try
            {
                APIResponse response = new APIResponse();
                ParadeBBL pBBL = new ParadeBBL();

                if (Id == null || Id <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                response.Success = pBBL.ParadeRemove((int)Id);

                if (!response.Success)
                    response.Message = ErrorMessages.Parade.ErrorParadeEdit;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, Constantes_Mensagens_Banner.ErrorBannerSave, ex);
                return StatusCode(StatusCodes.Status500InternalServerError);

            }
        }

    }
}

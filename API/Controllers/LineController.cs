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
    public class LineController : ControllerBase
    {
        public LineController() : base() { }

        [Route("LineList")]
        [HttpGet]
        public IActionResult LineList()
        {
            try
            {
                APIResponse response = new APIResponse();
                LineBBL lBBL = new LineBBL();
                response.Object = lBBL.LineList();

                if (response.Object != null)
                    response.Success = true;
                else
                    response.Message = ErrorMessages.Line.ErrorLineList;
                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("GetLine")]
        [HttpGet]
        public IActionResult GetLine(int? Id)
        {
            try
            {
                APIResponse response = new APIResponse();
                LineBBL lBBL = new LineBBL();

                if (Id == null || Id <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                response.Object = lBBL.GetLine((int)Id);

                if (response.Object != null)
                    response.Success = true;
                else
                    response.Message = ErrorMessages.Line.ErrorGetLine;



                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);

            }
        }

        [Route("LineCreate")]
        [HttpPost]
        public IActionResult LineCreate([FromBody] LineVO Data)
        {
            try
            {
                APIResponse response = new APIResponse();

                LineBBL lBBL = new LineBBL();

                response.Success = lBBL.LineCreate(Data);

                if (!response.Success)
                    response.Message = ErrorMessages.Line.ErrorLineEdit;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("LineEdit")]
        [HttpPut]
        public IActionResult LineEdit(LineVO Data)
        {
            try
            {

                APIResponse response = new APIResponse();
                LineBBL lBBL = new LineBBL();

                response.Success = lBBL.LineEdit(Data);

                if (!response.Success)
                    response.Message = ErrorMessages.Line.ErrorLineEdit;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("LineRemove")]
        [HttpDelete]
        public IActionResult LineRemove(int? Id)
        {
            try
            {
                if (Id == null || Id <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);
                APIResponse response = new APIResponse();
                LineBBL lBBL = new LineBBL();

                response.Success = lBBL.LineRemove((int)Id);

                if (!response.Success)
                    response.Message = ErrorMessages.Line.ErrorLineRemove;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }


        [Route("LinesByParadeList")]
        [HttpGet]
        public IActionResult LinesByParadeList(int? ParadeId)
        {
            try
            {

                if (ParadeId == null || ParadeId <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                APIResponse response = new APIResponse();
                LineBBL lBBL = new LineBBL();

                response.Object = lBBL.LinesByParadeList((int)ParadeId);

                if (response.Object != null)
                    response.Success = true;
                else
                    response.Message = ErrorMessages.Line.ErrorLinesByParadeList;
                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        } 

        [Route("LinkLineToParade")]
        [HttpPost]
        public IActionResult LinkLineToParade([FromBody]LineByParadeVO Data)
        {
            try
            {
                APIResponse response = new APIResponse();

                LineBBL lBBL = new LineBBL();

                response.Success = lBBL.LinkLineToParade(Data);

                if (!response.Success)
                    response.Message = ErrorMessages.Line.ErrorLinkLineToParade;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, Constantes_Mensagens_Line.ErrorLineSave, ex);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("UnlinkLineAndParade")]
        [HttpPut]
        public IActionResult UnlinkLineAndParade(int? Id)
        {
            try
            {
                if (Id == null || Id <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                APIResponse response = new APIResponse();
                LineBBL lBBL = new LineBBL();

                response.Success = lBBL.UnlinkLineAndParade((int)Id);

                if (!response.Success)
                    response.Message = ErrorMessages.Line.ErrorUnlinkLineAndParade;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                //LogBBL.Write(1, Constantes_Mensagens_Line.ErrorLineRemove, ex);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }



    }
}

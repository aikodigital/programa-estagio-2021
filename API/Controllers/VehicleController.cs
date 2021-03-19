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
    public class VehicleController : ControllerBase
    {

        [Route("VehicleList")]
        [HttpGet]
        public IActionResult VehicleList()
        {
            try
            {
                APIResponse response = new APIResponse();
                VehicleBBL vBBL = new VehicleBBL();
                response.Object = vBBL.VehicleList();

                if (response.Object != null)
                    response.Success = true;
                else
                    response.Message = ErrorMessages.Vehicle.ErrorVehicleList;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("GetVehicle")]
        [HttpGet]
        public IActionResult GetVehicle(int? Id)
        {
            try
            {
                APIResponse response = new APIResponse();
                VehicleBBL vBBL = new VehicleBBL();

                if (Id == null || Id <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                response.Object = vBBL.GetVehicle((int)Id);

                if (response.Object == null)
                {
                    response.Success = false;
                    response.Message = ErrorMessages.Vehicle.ErrorGetVehicle;
                }

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);

            }
        }

        [Route("VehicleCreate")]
        [HttpPost]
        public IActionResult VehicleCreate([FromBody] VehicleVO Data)
        {
            try
            {
                APIResponse response = new APIResponse();
                VehicleBBL vBBL = new VehicleBBL();

                response.Success = vBBL.VehicleCreate(Data);

                if (!response.Success)
                    response.Message = ErrorMessages.Vehicle.ErrorVehicleCreate;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("VehicleEdit")]
        [HttpPut]
        public IActionResult VehicleEdit([FromBody] VehicleVO Data)
        {
            try
            {
                APIResponse response = new APIResponse();
                VehicleBBL vBBL = new VehicleBBL();

                response.Success = vBBL.VehicleEdit(Data);

                if (!response.Success)
                    response.Message = ErrorMessages.Vehicle.ErrorVehicleEdit;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
        [Route("VehicleRemove")]
        [HttpDelete]
        public IActionResult VehicleRemove(int? Id)
        {
            try
            {
                APIResponse response = new APIResponse();
                VehicleBBL vBBL = new VehicleBBL();

                if (Id == null || Id <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                response.Success = vBBL.VehicleRemove((int)Id);

                if (!response.Success)
                    response.Message = ErrorMessages.Vehicle.ErrorVehicleRemove;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError);

            }
        }


        [Route("GetVehicleLocation")]
        [HttpGet]
        public IActionResult GetVehicleLocation(int? VehicleId)
        {
            try
            {
                APIResponse response = new APIResponse();
                VehicleBBL vBBL = new VehicleBBL();

                if (VehicleId == null || VehicleId <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                response.Object = vBBL.GetVehicleLocation((int)VehicleId);

                if (response.Object == null)
                {
                    response.Success = false;
                    response.Message = ErrorMessages.Vehicle.ErrorGetVehicleLocation;
                }

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError);

            }
        }

        [Route("VehicleLocationCreate")]
        [HttpPost]
        public IActionResult VehicleLocationCreate([FromBody] VehicleLocationVO Data)
        {
            try
            {
                APIResponse response = new APIResponse();
                VehicleBBL vBBL = new VehicleBBL();

                response.Success = vBBL.VehicleLocationCreate(Data);

                if (!response.Success)
                    response.Message = ErrorMessages.Vehicle.ErrorVehicleLocationCreate;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("VehicleLocationEdit")]
        [HttpPut]
        public IActionResult VehicleLocationEdit([FromBody] VehicleLocationVO Data)
        {
            try
            {
                APIResponse response = new APIResponse();
                VehicleBBL vBBL = new VehicleBBL();

                response.Success = vBBL.VehicleLocationEdit(Data);

                if (!response.Success)
                    response.Message = ErrorMessages.Vehicle.ErrorVehicleLocationEdit;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
     
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
        [Route("VehicleLocationRemove")]
        [HttpDelete]
        public IActionResult VehicleLocationRemove(int? VehicleId)
        {
            try
            {
                APIResponse response = new APIResponse();
                VehicleBBL vBBL = new VehicleBBL();

                if (VehicleId == null || VehicleId <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                response.Success = vBBL.VehicleLocationRemove((int)VehicleId);

                if (!response.Success)
                    response.Message = ErrorMessages.Vehicle.ErrorVehicleLocationRemove;

                return StatusCode(StatusCodes.Status200OK, response);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [Route("VehiclesByLineList")]
        [HttpGet]
        public IActionResult VehiclesByLineList(int? LineId)
        {
            try
            {

                if (LineId == null || LineId <= 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                APIResponse response = new APIResponse();
                VehicleBBL vBBL = new VehicleBBL();

                response.Object = vBBL.VehiclesByLineList((int)LineId);

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
    }
}

package com.aiko.api.resource;

import java.util.List;

import com.aiko.api.model.dto.VehiclePositionRequestDTO;
import com.aiko.api.model.dto.VehiclePositionResponseDTO;
import com.aiko.api.service.VehicleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class VehiclePositionResource {
  
  @Autowired
  private VehicleService vehicleService;


  @GetMapping(path = "/vehicles/positions")
  public ResponseEntity<List<VehiclePositionResponseDTO>> getVehiclesPositions(){
    
    List<VehiclePositionResponseDTO> vehiclePositionResponseDTOs;

    vehiclePositionResponseDTOs = vehicleService.getVehiclesPositions();
    
    return ResponseEntity.status(HttpStatus.OK).body(vehiclePositionResponseDTOs);
  }


  @GetMapping(path = "/vehicles/{id}/positions")
  public ResponseEntity<VehiclePositionResponseDTO> getVehiclePosition(@PathVariable Long id) throws Exception{
    
    VehiclePositionResponseDTO vehiclePositionResponseDTO;
    try {
      vehiclePositionResponseDTO = vehicleService.getVehiclePositionByVehicleId(id);
      
      return ResponseEntity.status(HttpStatus.OK).body(vehiclePositionResponseDTO);

    } catch (Exception e) {
      throw e;
    }
  }


  @PutMapping(path = "/vehicles/{id}/positions")
  public ResponseEntity<VehiclePositionResponseDTO> postVehiclePosition(
    @PathVariable Long id, @RequestBody VehiclePositionRequestDTO vehiclePosition) throws Exception{
    
    VehiclePositionResponseDTO vehiclePositionResponseDTO;
    try {
      vehiclePositionResponseDTO = vehicleService.updateVehiclePositionByVehicleId(id, vehiclePosition);
      
      return ResponseEntity.status(HttpStatus.CREATED).body(vehiclePositionResponseDTO);

    } catch (Exception e) {
      throw e;
    }
  }
}

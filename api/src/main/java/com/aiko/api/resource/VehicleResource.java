package com.aiko.api.resource;

import java.util.List;

import com.aiko.api.model.dto.VehicleRequestDTO;
import com.aiko.api.model.dto.VehicleResponseDTO;
import com.aiko.api.service.VehicleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class VehicleResource {
  
  @Autowired
  private VehicleService vehicleService;


  @PostMapping(path = "/vehicles")
  public ResponseEntity<VehicleResponseDTO> createVehicle(
    @RequestBody VehicleRequestDTO vehicleRequestDTO){

    return ResponseEntity
      .status(HttpStatus.CREATED)
      .body(vehicleService.save(vehicleRequestDTO));

  }

  @PutMapping(path = "/vehicles/{id}")
  public ResponseEntity<VehicleResponseDTO> updateVehicle(
    @RequestBody VehicleRequestDTO vehicleRequestDTO, @PathVariable Long id){

    return ResponseEntity
      .status(HttpStatus.ACCEPTED)
      .body(vehicleService.save(vehicleRequestDTO));
  }

  @DeleteMapping(path = "/vehicles/{id}")
  public ResponseEntity<VehicleResponseDTO> updateVehicle(@PathVariable Long id) throws Exception{
    
    return ResponseEntity
      .status(HttpStatus.ACCEPTED)
      .body(vehicleService.delete(id));
  }

  @GetMapping(path = "/vehicles")
  public ResponseEntity<List<VehicleResponseDTO>> getVehicles(){
    
    return ResponseEntity.status(HttpStatus.OK).body(vehicleService.findAll());
  }

  @GetMapping(path = "/vehicles/{id}")
  public ResponseEntity<VehicleResponseDTO> getVehicle(@PathVariable Long id) throws Exception{
    
      
    return ResponseEntity.status(HttpStatus.OK).body(vehicleService.findById(id));

 
  }
}

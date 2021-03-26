package com.aiko.api.resource;

import java.util.List;

import com.aiko.api.model.dto.StopRequestDTO;
import com.aiko.api.model.dto.StopResponseDTO;
import com.aiko.api.service.StopService;

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
public class StopResource {
  
  @Autowired
  private StopService stopService;

  @PostMapping(path = "/stops")
  public ResponseEntity<StopResponseDTO> createStop(
    @RequestBody StopRequestDTO stopRequestDTO){
    return ResponseEntity
      .status(HttpStatus.CREATED)
      .body(stopService.save(stopRequestDTO));
  }

  @PutMapping(path = "/stops/{id}")
  public ResponseEntity<StopResponseDTO> updateStop(
    @RequestBody StopRequestDTO stopRequestDTO, @PathVariable Long id){
    return ResponseEntity
      .status(HttpStatus.ACCEPTED)
      .body(stopService.save(stopRequestDTO));
  }

  @DeleteMapping(path = "/stops/{id}")
  public ResponseEntity<StopResponseDTO> updateStop(@PathVariable Long id) throws Exception{
    return ResponseEntity
      .status(HttpStatus.ACCEPTED)
      .body(stopService.delete(id));
  }

  @GetMapping(path = "/stops")
  public ResponseEntity<List<StopResponseDTO>> getStops(){
    return ResponseEntity.status(HttpStatus.OK).body(stopService.findAll());
  }

  @GetMapping(path = "/stops/{id}")
  public ResponseEntity<StopResponseDTO> getStop(@PathVariable Long id) throws Exception{
    return ResponseEntity.status(HttpStatus.OK).body(stopService.findById(id));
  }
}

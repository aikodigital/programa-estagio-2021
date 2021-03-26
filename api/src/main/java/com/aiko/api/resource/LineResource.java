package com.aiko.api.resource;

import java.util.List;

import com.aiko.api.model.dto.LineRequestDTO;
import com.aiko.api.model.dto.LineResponseDTO;
import com.aiko.api.service.LineService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LineResource {
  
  @Autowired
  private LineService lineService;

  @PostMapping(path = "/lines")
  public ResponseEntity<LineResponseDTO> createLine(
    @RequestBody LineRequestDTO LineRequestDTO){
    return ResponseEntity
      .status(HttpStatus.CREATED)
      .body(lineService.save(LineRequestDTO));
  }

  @PutMapping(path = "/lines/{id}")
  public ResponseEntity<LineResponseDTO> updateLine(
    @RequestBody LineRequestDTO LineRequestDTO, @PathVariable Long id){
    return ResponseEntity
      .status(HttpStatus.ACCEPTED)
      .body(lineService.save(LineRequestDTO));
  }

  @DeleteMapping(path = "/lines/{id}")
  public ResponseEntity<LineResponseDTO> updateLine(@PathVariable Long id) throws Exception{
    return ResponseEntity
      .status(HttpStatus.ACCEPTED)
      .body(lineService.delete(id));
  }

  @GetMapping(path = "/lines")
  public ResponseEntity<List<LineResponseDTO>> getLine(){
    return ResponseEntity.status(HttpStatus.OK).body(lineService.findAll());
  }

  @GetMapping(path = "/lines/{id}")
  public ResponseEntity<LineResponseDTO> getLine(@PathVariable Long id) throws Exception{
    return ResponseEntity.status(HttpStatus.OK).body(lineService.findById(id));
  }
}

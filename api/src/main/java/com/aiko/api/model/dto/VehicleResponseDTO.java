package com.aiko.api.model.dto;

import com.aiko.api.model.Line;
import com.googlecode.jmapper.annotations.JMap;

import lombok.Data;

@Data
public class VehicleResponseDTO {
  
  @JMap
  private long Id;

  @JMap
  private String name;

  @JMap
  private String modelo;

  @JMap
  private Line lineId;

}
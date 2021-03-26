package com.aiko.api.model.dto;

import com.aiko.api.model.Line;
import com.googlecode.jmapper.annotations.JMap;
import com.googlecode.jmapper.annotations.JMapConversion;

import lombok.Data;

@Data
public class VehicleResponseDTO {
  
  @JMap
  private long id;

  @JMap
  private String name;

  @JMap
  private String model;

  @JMap("line")
  private Long lineId;

  @JMapConversion(from={"line"}, to={"lineId"})
  public Long stopsConversion(Line line){
    return line.getId();
  }

  
}

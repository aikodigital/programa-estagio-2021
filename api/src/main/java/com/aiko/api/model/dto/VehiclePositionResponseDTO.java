package com.aiko.api.model.dto;

import com.aiko.api.model.VehiclePosition;
import com.googlecode.jmapper.annotations.JMap;

import lombok.Data;

@Data
public class VehiclePositionResponseDTO {
  
  @JMap
  private long id;

  @JMap
  private VehiclePosition vehiclePosition;
}

package com.aiko.api.model.dto;

import com.aiko.api.model.VehiclePosition;
import com.googlecode.jmapper.annotations.JMap;

import lombok.Data;

@Data
public class VehiclePositionRequestDTO {

  @JMap
  private VehiclePosition vehiclePosition;
}

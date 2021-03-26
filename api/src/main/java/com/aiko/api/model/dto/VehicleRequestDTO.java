package com.aiko.api.model.dto;

import lombok.Data;

@Data
public class VehicleRequestDTO {

  private String name;

  private String model;

  private Long lineId;

}

package com.aiko.api.model.dto;

import java.util.List;

import lombok.Data;

@Data
public class StopRequestDTO {

  private String name;

  private Double latitude;

  private Double longitude;

  private List<Long> linesIds;
  
}

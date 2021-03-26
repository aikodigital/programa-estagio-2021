package com.aiko.api.model.dto;

import java.util.List;


import lombok.Data;

@Data
public class LineRequestDTO {

  private String name;

  private List<Long> stopsIds;
  
  private List<Long> vehiclesId;

}

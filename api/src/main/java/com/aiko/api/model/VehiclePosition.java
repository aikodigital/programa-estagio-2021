package com.aiko.api.model;

import javax.persistence.Embeddable;


import lombok.Data;

@Data
@Embeddable
public class VehiclePosition {
  
  private Double latitude;
  private Double longitude;

}

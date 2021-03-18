package com.aiko.api.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;

import lombok.Data;

@Data
@Entity
public class VehiclePosition {
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long Id;


  private Double latitude;
  private Double longitude;

  @OneToOne(cascade = CascadeType.DETACH)
  @JoinColumn(name = "vehicle_id", referencedColumnName = "id")
  private Vehicle vehicleId;

}

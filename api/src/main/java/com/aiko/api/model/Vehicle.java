package com.aiko.api.model;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Vehicle {
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long id;


  private String name;

  private String model;

  @ManyToOne
  @JoinColumn(name = "line_id")
  private Line line;

  @Embedded
  private VehiclePosition vehiclePosition;
}

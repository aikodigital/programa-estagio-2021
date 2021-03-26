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
  private long Id;


  private String name;

  private String modelo;

  @ManyToOne
  @JoinColumn(name = "line_id", nullable=false)
  private Line lineId;

  @Embedded
  private VehiclePosition vehiclePosition;
}
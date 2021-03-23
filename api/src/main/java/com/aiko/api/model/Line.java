package com.aiko.api.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class Line {
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long Id;


  private String name;

  @ManyToMany(mappedBy = "lines")
  private List<Stop> stops;

  @OneToMany(mappedBy = "lines")
  private List<Vehicle> vehicles;
  
}

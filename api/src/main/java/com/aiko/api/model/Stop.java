package com.aiko.api.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;


import lombok.Data;

@Data
@Entity
public class Stop {
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long Id;

  private String name;

  private Double latitude;
  private Double longitude;

  @ManyToMany(mappedBy = "stops")
  private List<Line> lines;
}

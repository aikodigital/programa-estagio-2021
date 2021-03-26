package com.aiko.api.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.googlecode.jmapper.annotations.JMap;

import lombok.Data;

@Data
@Entity
public class Stop {
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long id;

  @JMap
  private String name;

  @JMap
  private Double latitude;
  @JMap
  private Double longitude;

  @ManyToMany(mappedBy = "stops")
  private List<Line> lines;
}

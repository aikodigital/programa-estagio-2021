package com.aiko.api.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.sound.sampled.Line;
import javax.persistence.JoinColumn;

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

  @ManyToMany
  @JoinTable(
  name = "stop_line", 
  joinColumns = @JoinColumn(name = "stop_id"), 
  inverseJoinColumns = @JoinColumn(name = "line_id"))
  private List<Line> lines;
}

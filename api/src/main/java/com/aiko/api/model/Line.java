package com.aiko.api.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;

import lombok.Data;

@Data
@Entity
public class Line {
  
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long id;


  private String name;

  @ManyToMany
  @JoinTable(
  name = "stop_line", 
  joinColumns = @JoinColumn(name = "line_id"), 
  inverseJoinColumns = @JoinColumn(name = "stop_id"))
  private List<Stop> stops;

  @OneToMany(mappedBy = "line")
  private List<Vehicle> vehicles;
  
}

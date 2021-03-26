package com.aiko.api.model.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.aiko.api.model.Stop;
import com.aiko.api.model.Vehicle;
import com.googlecode.jmapper.annotations.JMap;
import com.googlecode.jmapper.annotations.JMapConversion;

import lombok.Data;

@Data
public class LineResponseDTO {
  
  @JMap
  private Long id;

  @JMap
  private String name;

  @JMap("stops")
  private List<Long> stopsIds;
  
  @JMap("vehicles")
  private List<Long> vehiclesId;

  @JMapConversion(from={"stops"}, to={"stopsIds"})
  public List<Long> stopsConversion(List<Stop> stops){
    List<Long> stopsIds = stops.stream().map(Stop::getId).collect(Collectors.toList());
    return stopsIds;
  }

  @JMapConversion(from={"vehicles"}, to={"vehiclesId"})
  public List<Long> vehiclesConversion(List<Vehicle> vehicles){
    List<Long> vehiclesId = vehicles.stream().map(Vehicle::getId).collect(Collectors.toList());
    return vehiclesId;
  }

}

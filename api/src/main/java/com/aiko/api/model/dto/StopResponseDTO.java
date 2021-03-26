package com.aiko.api.model.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.aiko.api.model.Line;
import com.googlecode.jmapper.annotations.JMap;
import com.googlecode.jmapper.annotations.JMapConversion;

import lombok.Data;

@Data
public class StopResponseDTO {

  @JMap
  private long id;

  @JMap
  private String name;

  @JMap
  private Double latitude;
  @JMap
  private Double longitude;

  @JMap("lines")
  private List<Long> linesIds;

  @JMapConversion(from={"lines"}, to={"linesIds"})
  public List<Long> stopsConversion(List<Line> lines){
    List<Long> linesIds = lines.stream().map(Line::getId).collect(Collectors.toList());
    return linesIds;
  }
  
}

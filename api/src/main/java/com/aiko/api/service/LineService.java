package com.aiko.api.service;

import java.util.List;
import java.util.stream.Collectors;

import com.aiko.api.exception.DataNotFoundException;
import com.aiko.api.model.Line;
import com.aiko.api.model.Stop;
import com.aiko.api.model.Vehicle;
import com.aiko.api.model.dto.LineRequestDTO;
import com.aiko.api.model.dto.LineResponseDTO;
import com.aiko.api.repository.LineRepository;
import com.aiko.api.repository.StopRepository;
import com.aiko.api.repository.VehicleRepository;
import com.googlecode.jmapper.JMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LineService {
  
  @Autowired
  private LineRepository lineRepository;

  @Autowired
  private StopRepository stopRepository;

  @Autowired
  private VehicleRepository vehicleRepository;

  public LineResponseDTO save(LineRequestDTO lineRequestDTO){
    JMapper<Line, LineRequestDTO> lineRequestMapper;
    JMapper<LineResponseDTO, Line> lineResponseMapper;
    Line line;
    Line savedLine;
    LineResponseDTO lineResponseDTO;
    lineRequestMapper = new JMapper<>(Line.class, LineRequestDTO.class);
    line = lineRequestMapper.getDestination(lineRequestDTO);    
    savedLine = lineRepository.save(line);
    lineResponseMapper = new JMapper<>(LineResponseDTO.class, Line.class);
    lineResponseDTO = lineResponseMapper.getDestination(savedLine);
    return lineResponseDTO;
  }

  public LineResponseDTO update(Long id, LineRequestDTO lineRequestDTO) throws Exception{
    JMapper<LineResponseDTO, Line> lineResponseMapper;
    Line savedLine;
    LineResponseDTO LineResponseDTO;
    Line line = lineRepository.findById(id)
        .orElseThrow(() -> new DataNotFoundException("Line not found."));
    if(lineRequestDTO.getName() != null){
      line.setName(lineRequestDTO.getName());
    }
    if(lineRequestDTO.getStopsIds() != null){
      List<Stop> stops = lineRequestDTO.getStopsIds()
        .stream()
        .map(stopId -> stopRepository.findById(stopId)
          .orElseThrow(() -> new DataNotFoundException("Stop not found.")))
        .collect(Collectors.toList());
      line.setStops(stops);
    }
    if(lineRequestDTO.getVehiclesId() != null){
      List<Vehicle> vehicles = lineRequestDTO.getVehiclesId()
        .stream()
        .map(vehicleId -> vehicleRepository.findById(vehicleId)
          .orElseThrow(() -> new DataNotFoundException("Stop not found.")))
        .collect(Collectors.toList());
      line.setVehicles(vehicles);
    }
    savedLine = lineRepository.save(line);
    lineResponseMapper = new JMapper<>(LineResponseDTO.class, Line.class);
    LineResponseDTO = lineResponseMapper.getDestination(savedLine);
    return LineResponseDTO;
  }

  public LineResponseDTO delete(Long id) throws Exception{
    JMapper<LineResponseDTO, Line> lineResponseMapper;
    LineResponseDTO LineResponseDTO;      
    Line line = lineRepository.findById(id)
      .orElseThrow(() -> new DataNotFoundException("Line not found."));
    lineRepository.delete(line);
    lineResponseMapper = new JMapper<>(LineResponseDTO.class, Line.class);
    LineResponseDTO = lineResponseMapper.getDestination(line);
    return LineResponseDTO;  
  }

  public List<LineResponseDTO> findAll(){
   
    JMapper<LineResponseDTO, Line> vehicleMapper;
    List<LineResponseDTO> LineResponseDTOs;
    List<Line> vehicles = lineRepository.findAll();    
    vehicleMapper = new JMapper<>(LineResponseDTO.class, Line.class);
    LineResponseDTOs = vehicles
      .stream()
      .map(line -> vehicleMapper.getDestination(line))
      .collect(Collectors.toList());
    return LineResponseDTOs;
  }

  public LineResponseDTO findById(Long id) throws Exception{
    JMapper<LineResponseDTO, Line> vehicleMapper;
    LineResponseDTO LineResponseDTO;
    try {
      Line line = lineRepository.findById(id)
        .orElseThrow(() -> new DataNotFoundException("Line not found."));   
      vehicleMapper = new JMapper<>(LineResponseDTO.class, Line.class);
      LineResponseDTO = vehicleMapper.getDestination(line);
      return LineResponseDTO;
    } catch (Exception e) {
      throw e;
    }
  }
}

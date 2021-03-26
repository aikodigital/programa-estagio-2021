package com.aiko.api.service;

import java.util.List;
import java.util.stream.Collectors;

import com.aiko.api.exception.DataNotFoundException;
import com.aiko.api.model.Line;
import com.aiko.api.model.Stop;
import com.aiko.api.model.dto.StopRequestDTO;
import com.aiko.api.model.dto.StopResponseDTO;
import com.aiko.api.repository.LineRepository;
import com.aiko.api.repository.StopRepository;
import com.googlecode.jmapper.JMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StopService {
  
  @Autowired
  StopRepository stopRepository;

  @Autowired
  LineRepository lineRepository;

  public StopResponseDTO save(StopRequestDTO stopRequestDTO){
    
    JMapper<StopResponseDTO, Stop> stopResponseMapper;
    Stop stop = new Stop();
    Stop savedStop;
    StopResponseDTO stopResponseDTO;
    if(stopRequestDTO.getName() != null){
      stop.setName(stopRequestDTO.getName());
    }
    if(stopRequestDTO.getLatitude() != null){
      stop.setLatitude(stopRequestDTO.getLatitude());
    }
    if(stopRequestDTO.getLongitude() != null){
      stop.setLongitude(stopRequestDTO.getLongitude());
    }
    if(stopRequestDTO.getLinesIds() != null){
      List<Line> lines = stopRequestDTO.getLinesIds()
        .stream()
        .map(lineId -> lineRepository.findById(lineId)
          .orElseThrow(() -> new DataNotFoundException("Line not found.")))
        .collect(Collectors.toList());
      stop.setLines(lines);
    }
    savedStop = stopRepository.save(stop);
    stopResponseMapper = new JMapper<>(StopResponseDTO.class, Stop.class);
    stopResponseDTO = stopResponseMapper.getDestination(savedStop);
    return stopResponseDTO;
  }

  public StopResponseDTO update(Long id, StopRequestDTO stopRequestDTO) throws Exception{
    JMapper<StopResponseDTO, Stop> stopResponseMapper;
    Stop savedStop;
    StopResponseDTO stopResponseDTO;
    Stop stop = stopRepository.findById(id)
        .orElseThrow(() -> new DataNotFoundException("Stop not found."));
    if(stopRequestDTO.getName() != null){
      stop.setName(stopRequestDTO.getName());
    }
    if(stopRequestDTO.getLatitude() != null){
      stop.setLatitude(stopRequestDTO.getLatitude());
    }
    if(stopRequestDTO.getLongitude() != null){
      stop.setLongitude(stopRequestDTO.getLongitude());
    }
    if(stopRequestDTO.getLinesIds() != null){
      List<Line> lines = stopRequestDTO.getLinesIds()
        .stream()
        .map(lineId -> lineRepository.findById(lineId)
          .orElseThrow(() -> new DataNotFoundException("Line not found.")))
        .collect(Collectors.toList());
      stop.setLines(lines);
    }
    savedStop = stopRepository.save(stop);
    stopResponseMapper = new JMapper<>(StopResponseDTO.class, Stop.class);
    stopResponseDTO = stopResponseMapper.getDestination(savedStop);
    return stopResponseDTO;
  }

  public StopResponseDTO delete(Long id) throws Exception{
    JMapper<StopResponseDTO, Stop> stopResponseMapper;
    StopResponseDTO stopResponseDTO;      
    Stop stop = stopRepository.findById(id)
      .orElseThrow(() -> new DataNotFoundException("Stop not found."));
    stopRepository.delete(stop);
    stopResponseMapper = new JMapper<>(StopResponseDTO.class, Stop.class);
    stopResponseDTO = stopResponseMapper.getDestination(stop);
    return stopResponseDTO;  
  }

  public List<StopResponseDTO> findAll(){
   
    JMapper<StopResponseDTO, Stop> stopMapper;
    List<StopResponseDTO> stopResponseDTOs;
    List<Stop> stops = stopRepository.findAll();    
    stopMapper = new JMapper<>(StopResponseDTO.class, Stop.class);
    stopResponseDTOs = stops
      .stream()
      .map(stop -> stopMapper.getDestination(stop))
      .collect(Collectors.toList());
    return stopResponseDTOs;
  }

  public StopResponseDTO findById(Long id) throws Exception{
    JMapper<StopResponseDTO, Stop> stopMapper;
    StopResponseDTO stopResponseDTO;
    try {
      Stop stop = stopRepository.findById(id)
        .orElseThrow(() -> new DataNotFoundException("Stop not found."));   
      stopMapper = new JMapper<>(StopResponseDTO.class, Stop.class);
      stopResponseDTO = stopMapper.getDestination(stop);
      return stopResponseDTO;
    } catch (Exception e) {
      throw e;
    }
  }
}

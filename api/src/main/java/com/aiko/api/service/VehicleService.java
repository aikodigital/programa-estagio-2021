package com.aiko.api.service;

import java.util.List;
import java.util.stream.Collectors;

import com.aiko.api.exception.DataNotFoundException;
import com.aiko.api.model.Line;
import com.aiko.api.model.Vehicle;
import com.aiko.api.model.VehiclePosition;
import com.aiko.api.model.dto.VehiclePositionRequestDTO;
import com.aiko.api.model.dto.VehiclePositionResponseDTO;
import com.aiko.api.model.dto.VehicleRequestDTO;
import com.aiko.api.model.dto.VehicleResponseDTO;
import com.aiko.api.repository.LineRepository;
import com.aiko.api.repository.VehicleRepository;
import com.googlecode.jmapper.JMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {
  
  @Autowired
  private VehicleRepository vehicleRepository;

  @Autowired LineRepository lineRepository;

  public VehicleResponseDTO save(VehicleRequestDTO vehicleRequestDTO){
    JMapper<VehicleResponseDTO, Vehicle> vehicleResponseMapper;
    Vehicle vehicle = new Vehicle();
    Vehicle savedVehicle;
    VehicleResponseDTO vehicleResponseDTO;
    if(vehicleRequestDTO.getName() != null){
      vehicle.setName(vehicleRequestDTO.getName());
    }
    if(vehicleRequestDTO.getLineId() != null){
      Line line = lineRepository.findById(vehicleRequestDTO.getLineId())
        .orElseThrow(() -> new DataNotFoundException("Line not found."));
      vehicle.setLine(line);
    }
    if(vehicleRequestDTO.getModel() != null){
      vehicle.setModel(vehicleRequestDTO.getModel());
    }    
    savedVehicle = vehicleRepository.save(vehicle);
    vehicleResponseMapper = new JMapper<>(VehicleResponseDTO.class, Vehicle.class);
    vehicleResponseDTO = vehicleResponseMapper.getDestination(savedVehicle);
    return vehicleResponseDTO;
  }

  public VehicleResponseDTO update(Long id, VehicleRequestDTO vehicleRequestDTO) throws Exception{
    JMapper<VehicleResponseDTO, Vehicle> vehicleResponseMapper;
    Vehicle savedVehicle;
    VehicleResponseDTO vehicleResponseDTO;
    Vehicle vehicle = vehicleRepository.findById(id)
        .orElseThrow(() -> new DataNotFoundException("Vehicle not found."));
    if(vehicleRequestDTO.getName() != null){
      vehicle.setName(vehicleRequestDTO.getName());
    }
    if(vehicleRequestDTO.getLineId() != null){
      Line line = lineRepository.findById(vehicleRequestDTO.getLineId())
        .orElseThrow(() -> new DataNotFoundException("Line not found."));
      vehicle.setLine(line);
    }
    if(vehicleRequestDTO.getModel() != null){
      vehicle.setModel(vehicleRequestDTO.getModel());
    }
    savedVehicle = vehicleRepository.save(vehicle);
    vehicleResponseMapper = new JMapper<>(VehicleResponseDTO.class, Vehicle.class);
    vehicleResponseDTO = vehicleResponseMapper.getDestination(savedVehicle);
    return vehicleResponseDTO;
  }

  public VehicleResponseDTO delete(Long id) throws Exception{
    JMapper<VehicleResponseDTO, Vehicle> vehicleResponseMapper;
    VehicleResponseDTO vehicleResponseDTO;      
    Vehicle vehicle = vehicleRepository.findById(id)
      .orElseThrow(() -> new DataNotFoundException("Vehicle not found."));
    vehicleRepository.delete(vehicle);
    vehicleResponseMapper = new JMapper<>(VehicleResponseDTO.class, Vehicle.class);
    vehicleResponseDTO = vehicleResponseMapper.getDestination(vehicle);
    return vehicleResponseDTO;  
  }

  public List<VehicleResponseDTO> findAll(){
   
    JMapper<VehicleResponseDTO, Vehicle> vehicleMapper;
    List<VehicleResponseDTO> vehicleResponseDTOs;
    List<Vehicle> vehicles = vehicleRepository.findAll();    
    vehicleMapper = new JMapper<>(VehicleResponseDTO.class, Vehicle.class);
    vehicleResponseDTOs = vehicles
      .stream()
      .map(vehicle -> vehicleMapper.getDestination(vehicle))
      .collect(Collectors.toList());
    return vehicleResponseDTOs;
  }

  public VehicleResponseDTO findById(Long id) throws Exception{
    JMapper<VehicleResponseDTO, Vehicle> vehicleMapper;
    VehicleResponseDTO vehicleResponseDTO;
    try {
      Vehicle vehicle = vehicleRepository.findById(id)
        .orElseThrow(() -> new DataNotFoundException("Vehicle not found."));   
      vehicleMapper = new JMapper<>(VehicleResponseDTO.class, Vehicle.class);
      vehicleResponseDTO = vehicleMapper.getDestination(vehicle);
      return vehicleResponseDTO;
    } catch (Exception e) {
      throw e;
    }
  }



  // Vehichle Positions

  public List<VehiclePositionResponseDTO> getVehiclesPositions(){
    
    JMapper<VehiclePositionResponseDTO, Vehicle> vehicleMapper;
    List<VehiclePositionResponseDTO> vehiclePositionResponseDTOs;

    List<Vehicle> vehicles = vehicleRepository.findAll();
    
    vehicleMapper = new JMapper<>(VehiclePositionResponseDTO.class, Vehicle.class);

    vehiclePositionResponseDTOs = vehicles
      .stream()
      .map(vehicle -> vehicleMapper.getDestination(vehicle))
      .collect(Collectors.toList());

    return vehiclePositionResponseDTOs;

  }

  public VehiclePositionResponseDTO getVehiclePositionByVehicleId(Long id) throws Exception{
    
    JMapper<VehiclePositionResponseDTO, Vehicle> vehicleMapper;
    VehiclePositionResponseDTO vehiclePositionResponseDTO;

    try {
      Vehicle vehicle = vehicleRepository.findById(id)
      .orElseThrow(() -> new DataNotFoundException("Vehicle not found."));
      
      vehicleMapper = new JMapper<>(VehiclePositionResponseDTO.class, Vehicle.class);
      
      vehiclePositionResponseDTO = vehicleMapper.getDestination(vehicle);
      
      return vehiclePositionResponseDTO;

    } catch (Exception e) {
      throw e;
    }

  }
  public VehiclePositionResponseDTO updateVehiclePositionByVehicleId(
    Long id, VehiclePositionRequestDTO vehiclePositionRequestDTO) throws Exception{
  
    JMapper<VehiclePositionResponseDTO, Vehicle> vehicleResponseMapper;
    VehiclePositionResponseDTO vehiclePositionResponseDTO;
    Vehicle savedVehicle;
    try {
      Vehicle vehicle = vehicleRepository.findById(id)
      .orElseThrow(() -> new DataNotFoundException("Vehicle not found."));
      VehiclePosition vehiclePosition = new VehiclePosition();
      if(vehiclePositionRequestDTO.getVehiclePosition().getLatitude() != null){
        vehiclePosition.setLatitude(vehiclePositionRequestDTO.getVehiclePosition().getLatitude());
      }
      if(vehiclePositionRequestDTO.getVehiclePosition().getLongitude() != null){
        vehiclePosition.setLongitude(vehiclePositionRequestDTO.getVehiclePosition().getLongitude());
      }
      vehicle.setVehiclePosition(vehiclePosition);  
      savedVehicle = vehicleRepository.save(vehicle);
      vehicleResponseMapper = new JMapper<>(VehiclePositionResponseDTO.class, Vehicle.class); 
      vehiclePositionResponseDTO = vehicleResponseMapper.getDestination(savedVehicle);
      return vehiclePositionResponseDTO;
    } catch (Exception e) {
      throw e;
    }
  }
    
}

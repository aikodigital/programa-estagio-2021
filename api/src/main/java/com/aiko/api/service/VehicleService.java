package com.aiko.api.service;

import java.util.List;
import java.util.stream.Collectors;

import com.aiko.api.exception.DataNotFoundException;
import com.aiko.api.model.Vehicle;
import com.aiko.api.model.VehiclePosition;
import com.aiko.api.model.dto.VehiclePositionRequestDTO;
import com.aiko.api.model.dto.VehiclePositionResponseDTO;
import com.aiko.api.model.dto.VehicleRequestDTO;
import com.aiko.api.model.dto.VehicleResponseDTO;
import com.aiko.api.repository.VehicleRepository;
import com.googlecode.jmapper.JMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {
  
  @Autowired
  private VehicleRepository vehicleRepository;

  public VehicleResponseDTO save(VehicleRequestDTO vehicleRequestDTO){
    JMapper<Vehicle, VehicleRequestDTO> vehicleRequestMapper;
    JMapper<VehicleResponseDTO, Vehicle> vehicleResponseMapper;
    Vehicle vehicle;
    Vehicle savedVehicle;
    VehicleResponseDTO vehicleResponseDTO;
    vehicleRequestMapper = new JMapper<>(Vehicle.class, VehicleRequestDTO.class);
    vehicle = vehicleRequestMapper.getDestination(vehicleRequestDTO);    
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
      vehicle.setLineId(vehicleRequestDTO.getLineId());
    }
    if(vehicleRequestDTO.getModelo() != null){
      vehicle.setModelo(vehicleRequestDTO.getModelo());
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
  
    JMapper<Vehicle, VehiclePositionRequestDTO> vehicleRequestMapper;
    JMapper<VehiclePositionResponseDTO, Vehicle> vehicleResponseMapper;
    VehiclePositionResponseDTO vehiclePositionResponseDTO;

    try {
      Vehicle vehicle = vehicleRepository.findById(id)
      .orElseThrow(() -> new DataNotFoundException("Vehicle not found."));
      VehiclePosition vehiclePosition;
      vehicleRequestMapper = new JMapper<>(Vehicle.class, VehiclePositionRequestDTO.class);
      vehiclePosition = vehicleRequestMapper.getDestination(vehiclePositionRequestDTO).getVehiclePosition();
      
      vehicle.setVehiclePosition(vehiclePosition);
      
      vehicleResponseMapper = new JMapper<>(VehiclePositionResponseDTO.class, Vehicle.class); 
      vehiclePositionResponseDTO = vehicleResponseMapper.getDestination(vehicle);
      
      return vehiclePositionResponseDTO;

    } catch (Exception e) {
      throw e;
    }
  }
    
}

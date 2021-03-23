package com.aiko.api.service;

import java.util.List;
import java.util.Optional;

import com.aiko.api.model.VehiclePosition;
import com.aiko.api.repository.VehiclePositionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehiclePositionService {
  
  @Autowired
  private VehiclePositionRepository vehiclePositionRepository;

  public VehiclePosition save(VehiclePosition vehiclePosition){
    return vehiclePositionRepository.save(vehiclePosition);
  }

  public VehiclePosition update(VehiclePosition vehiclePosition){
    return vehiclePositionRepository.save(vehiclePosition);
  }

  public List<VehiclePosition> findAll(){
    return vehiclePositionRepository.findAll();
  }

  public Optional<VehiclePosition> findById(Long id){
    return vehiclePositionRepository.findById(id);
  }

  public void delete(VehiclePosition vehiclePosition){
    vehiclePositionRepository.delete(vehiclePosition);
  }

}

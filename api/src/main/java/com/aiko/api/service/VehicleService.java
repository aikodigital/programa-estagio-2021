package com.aiko.api.service;

import java.util.List;
import java.util.Optional;

import com.aiko.api.model.Vehicle;
import com.aiko.api.repository.VehicleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {
  
  @Autowired
  private VehicleRepository vehicleRepository;

  public Vehicle save(Vehicle vehicle){
    return vehicleRepository.save(vehicle);
  }

  public Vehicle update(Vehicle vehicle){
    return vehicleRepository.save(vehicle);
  }

  public List<Vehicle> findAll(){
    return vehicleRepository.findAll();
  }

  public Optional<Vehicle> findById(Long id){
    return vehicleRepository.findById(id);
  }

  public void delete(Vehicle vehicle){
    vehicleRepository.delete(vehicle);
  }
}

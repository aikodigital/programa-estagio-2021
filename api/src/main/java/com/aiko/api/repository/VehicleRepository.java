package com.aiko.api.repository;

import com.aiko.api.model.Vehicle;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long>{
  
}

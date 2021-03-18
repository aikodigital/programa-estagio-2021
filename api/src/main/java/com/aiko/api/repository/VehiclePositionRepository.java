package com.aiko.api.repository;

import com.aiko.api.model.VehiclePosition;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VehiclePositionRepository extends JpaRepository<VehiclePosition, Long>{
  
}

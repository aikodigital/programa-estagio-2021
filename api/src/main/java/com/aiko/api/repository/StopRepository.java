package com.aiko.api.repository;

import com.aiko.api.model.Stop;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StopRepository extends JpaRepository<Stop, Long>{
  
}

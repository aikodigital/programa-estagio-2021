package com.aiko.api.service;

import java.util.List;
import java.util.Optional;

import com.aiko.api.model.Stop;
import com.aiko.api.repository.StopRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StopService {
  
  @Autowired
  StopRepository stopRepository;

  public Stop save(Stop stop){
    return stopRepository.save(stop);
  }

  public List<Stop> findAll(){
    return stopRepository.findAll();
  }

  public Optional<Stop> findById(Long id){
    return stopRepository.findById(id);
  }

  public void delete(Stop stop){
    stopRepository.delete(stop);
  }
}

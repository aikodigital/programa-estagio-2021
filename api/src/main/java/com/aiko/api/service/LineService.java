package com.aiko.api.service;

import java.util.List;
import java.util.Optional;

import com.aiko.api.model.Line;
import com.aiko.api.repository.LineRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LineService {
  
  @Autowired
  private LineRepository lineRepository;

  public Line save(Line line){
    return lineRepository.save(line);
  }

  public Line update(Line line){
    return lineRepository.save(line);
  }

  public List<Line> findAll(){
    return lineRepository.findAll();
  }

  public Optional<Line> findById(Long id){
    return lineRepository.findById(id);
  }

  public void delete(Line line){
    lineRepository.delete(line);
  }
}

package com.aiko.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHandlers {
  

  @ExceptionHandler
  public ResponseEntity<DataNotFoundException> handleDataNotFoundException(DataNotFoundException e){
    return new ResponseEntity<DataNotFoundException>(e, HttpStatus.NOT_FOUND);
  }

}

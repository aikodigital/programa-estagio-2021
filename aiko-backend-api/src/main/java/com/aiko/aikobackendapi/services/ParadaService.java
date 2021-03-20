package com.aiko.aikobackendapi.services;

import com.aiko.aikobackendapi.repositories.ParadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParadaService {

    @Autowired
    private ParadaRepository paradaRepository;
}

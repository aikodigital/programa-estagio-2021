package com.aiko.aikobackendapi.services;

import com.aiko.aikobackendapi.repositories.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VeiculoService {

    @Autowired
    VeiculoRepository veiculoRepository;
}

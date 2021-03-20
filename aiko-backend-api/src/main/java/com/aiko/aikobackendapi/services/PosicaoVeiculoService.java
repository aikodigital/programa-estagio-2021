package com.aiko.aikobackendapi.services;

import com.aiko.aikobackendapi.repositories.PosicaoVeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PosicaoVeiculoService {

    @Autowired
    private PosicaoVeiculoRepository posicaoVeiculoRepository;
}

package com.aiko.aikobackendapi.services;

import com.aiko.aikobackendapi.domain.Veiculo;
import com.aiko.aikobackendapi.repositories.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    public Veiculo buscar(long id) {
        Optional<Veiculo> veiculo = veiculoRepository.findById(id);

        return veiculo.orElse(null);
    }
}

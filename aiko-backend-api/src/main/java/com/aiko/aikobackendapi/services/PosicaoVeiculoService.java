package com.aiko.aikobackendapi.services;

import com.aiko.aikobackendapi.domain.PosicaoVeiculo;
import com.aiko.aikobackendapi.repositories.PosicaoVeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class PosicaoVeiculoService {

    @Autowired
    private PosicaoVeiculoRepository posicaoVeiculoRepository;

    public PosicaoVeiculo buscar(long id) {
        Optional<PosicaoVeiculo> posicaoVeiculo = posicaoVeiculoRepository.findById(id);

        return posicaoVeiculo.orElse(null);
    }

    public List<PosicaoVeiculo> listar() {
        List<PosicaoVeiculo> posicaoVeiculos = posicaoVeiculoRepository.findAll();

        return (posicaoVeiculos.isEmpty()) ? null : posicaoVeiculos;
    }

    public void adicionar(PosicaoVeiculo posicaoVeiculo) {
        posicaoVeiculoRepository.saveAll(Arrays.asList(posicaoVeiculo));

    }

    public void atualizar(PosicaoVeiculo posicaoVeiculo) {
        posicaoVeiculoRepository.saveAll(Arrays.asList(posicaoVeiculo));

    }

    public void deletar(PosicaoVeiculo posicaoVeiculo) {

        posicaoVeiculoRepository.delete(posicaoVeiculo);

    }

    public void deletar(long id) {

        posicaoVeiculoRepository.deleteById(id);

    }
}

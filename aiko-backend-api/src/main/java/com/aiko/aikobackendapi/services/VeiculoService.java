package com.aiko.aikobackendapi.services;

import com.aiko.aikobackendapi.domain.Veiculo;
import com.aiko.aikobackendapi.repositories.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    public Veiculo buscar(long id) {
        Optional<Veiculo> veiculo = veiculoRepository.findById(id);

        return veiculo.orElse(null);
    }

    public List<Veiculo> listar() {
        List<Veiculo> veiculos = veiculoRepository.findAll();

        return (veiculos.isEmpty()) ? null : veiculos;
    }

    public void adicionar(Veiculo veiculo) {
        veiculoRepository.saveAll(Arrays.asList(veiculo));

    }

    public void atualizar(Veiculo veiculo) {
        veiculoRepository.saveAll(Arrays.asList(veiculo));

    }

    public void deletar(Veiculo veiculo) {

        veiculoRepository.delete(veiculo);

    }

    public void deletar(long id) {

        veiculoRepository.deleteById(id);

    }
}

package com.aiko.aikobackendapi.services;

import com.aiko.aikobackendapi.domain.Parada;
import com.aiko.aikobackendapi.repositories.ParadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class ParadaService {

    @Autowired
    private ParadaRepository paradaRepository;

    public Parada buscar(long id) {
        Optional<Parada> parada = paradaRepository.findById(id);

        return parada.orElse(null);
    }

    public List<Parada> listar() {
        List<Parada> paradas = paradaRepository.findAll();

        return (paradas.isEmpty()) ? null : paradas;
    }

    public void adicionar(Parada parada) {
        paradaRepository.saveAll(Arrays.asList(parada));

    }

    public void atualizar(Parada parada) {
        paradaRepository.saveAll(Arrays.asList(parada));

    }

    public void deletar(Parada parada) {

        paradaRepository.delete(parada);

    }

    public void deletar(long id) {

        paradaRepository.deleteById(id);

    }
}

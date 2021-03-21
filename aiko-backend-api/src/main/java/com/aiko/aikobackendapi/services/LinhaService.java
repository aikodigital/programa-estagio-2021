package com.aiko.aikobackendapi.services;

import com.aiko.aikobackendapi.domain.Linha;
import com.aiko.aikobackendapi.repositories.LinhaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class LinhaService {

    @Autowired
    private LinhaRepository linhaRepository;

    public Linha buscar(long id) {
        Optional<Linha> linha = linhaRepository.findById(id);

        return linha.orElse(null);
    }

    public List<Linha> listar() {
        List<Linha> linhas = linhaRepository.findAll();

        return (linhas.isEmpty()) ? null : linhas;
    }

    public void adicionar(Linha linha) {
        linhaRepository.saveAll(Arrays.asList(linha));

    }

    public void atualizar(Linha linha) {
        linhaRepository.saveAll(Arrays.asList(linha));

    }

    public void deletar(Linha linha) {

        linhaRepository.delete(linha);

    }

    public void deletar(long id) {

        linhaRepository.deleteById(id);

    }
}

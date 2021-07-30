package br.com.teste.java.testebackend.service;

import br.com.teste.java.testebackend.domain.Linha;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.repository.LinhaRepository;
import br.com.teste.java.testebackend.request.post.LinhaPostRequestBody;
import br.com.teste.java.testebackend.request.put.LinhaPutRequestBody;
import br.com.teste.java.testebackend.service.impl.LinhaServiceCustom;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@RequiredArgsConstructor
public class LinhaService implements LinhaServiceCustom {

    private final LinhaRepository linhaRepository;

    @Override
    public Page<Linha> listAll(Pageable pageable) {
        return linhaRepository.findAll(pageable);
    }

    @Override
    public Linha findByIdOrThrowBadRequestException(Long id) {
        Optional<Linha> linha = linhaRepository.findById(id);

        linhaRepository.findById(id)
                .orElseThrow(()-> new BadRequestException("Linha not found"));
        return linha.orElseThrow();
    }

    @Override
    public List<Linha> findByParada(Long id) {
        List<Long> linhasId = linhaRepository.findByParadas_Id(id);

        List<Linha> linhas = new ArrayList();

        for (Long ids: linhasId) {
            linhas.add(findByIdOrThrowBadRequestException(ids));
        }

        return (linhas.isEmpty()) ? null: linhas;
    }


    @Override
    @Transactional
    public Linha save(LinhaPostRequestBody linhaPostRequestBody) {
        return linhaRepository.save(Linha.builder()
                .longitude(linhaPostRequestBody.getLongitude())
                .latitude(linhaPostRequestBody.getLatitude())
                .name(linhaPostRequestBody.getName()).build());
    }

    @Override
    public void delete(Long id) {
        linhaRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    @Override
    public void replace(LinhaPutRequestBody linhaPutRequestBody){
        Linha linhaSave = findByIdOrThrowBadRequestException(linhaPutRequestBody.getId());

        Linha linha = Linha.builder()
                .id(linhaSave.getId())
                .name(linhaPutRequestBody.getName())
                .build();

        linhaRepository.save(linha);
    }
}
package br.com.teste.java.testebackend.service;

import br.com.teste.java.testebackend.domain.PosicaoVeiculo;
import br.com.teste.java.testebackend.request.put.PosicaoVeiculoPutRequestBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;

public interface PosicaoVeiculoServiceCustom {
    Page<PosicaoVeiculo> listAll(Pageable pageable);

    PosicaoVeiculo findByIdOrThrowBadRequestException(Long id);

    @Transactional
    PosicaoVeiculo save(PosicaoVeiculo posicaoVeiculo);

    void delete(Long id);

    void replace(PosicaoVeiculoPutRequestBody posicaoVeiculoPutRequestBody);
}

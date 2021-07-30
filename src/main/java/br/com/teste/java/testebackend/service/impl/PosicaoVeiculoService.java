package br.com.teste.java.testebackend.service.impl;


import br.com.teste.java.testebackend.domain.PosicaoVeiculo;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.repository.PosicaoVeiculoRepository;
import br.com.teste.java.testebackend.request.put.PosicaoVeiculoPutRequestBody;
import br.com.teste.java.testebackend.service.PosicaoVeiculoServiceCustom;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@RequiredArgsConstructor
public class PosicaoVeiculoService implements PosicaoVeiculoServiceCustom {

    private final PosicaoVeiculoRepository posicaoVeiculoRepository;

    @Override
    public Page<PosicaoVeiculo> listAll(Pageable pageable) {
        return posicaoVeiculoRepository.findAll(pageable);
    }

    @Override
    public PosicaoVeiculo findByIdOrThrowBadRequestException(Long id) {
        return posicaoVeiculoRepository.findById(id)
                .orElseThrow(()-> new BadRequestException("PosicaoVeiculo not found"));
    }

    @Override
    @Transactional
    public PosicaoVeiculo save(PosicaoVeiculo posicaoVeiculo) {
        return posicaoVeiculoRepository.save(posicaoVeiculo);
    }

    @Override
    public void delete(Long id) {
        posicaoVeiculoRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    @Override
    public void replace(PosicaoVeiculoPutRequestBody posicaoVeiculoPutRequestBody){
        PosicaoVeiculo posicaoVeiculoSave = findByIdOrThrowBadRequestException(posicaoVeiculoPutRequestBody.getId());

        posicaoVeiculoRepository.save(posicaoVeiculoSave);
    }

}

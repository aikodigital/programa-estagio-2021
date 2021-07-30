package br.com.teste.java.testebackend.service;


import br.com.teste.java.testebackend.domain.PosicaoVeiculo;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.repository.PosicaoVeiculoRepository;
import br.com.teste.java.testebackend.request.put.PosicaoVeiculoPutRequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@RequiredArgsConstructor
public class PosicaoVeiculoService {

    private final PosicaoVeiculoRepository posicaoVeiculoRepository;

    public Page<PosicaoVeiculo> listAll(Pageable pageable) {
        return posicaoVeiculoRepository.findAll(pageable);
    }

    public PosicaoVeiculo findByIdOrThrowBadRequestException(Long id) {
        return posicaoVeiculoRepository.findById(id)
                .orElseThrow(()-> new BadRequestException("PosicaoVeiculo not found"));
    }

    @Transactional
    public PosicaoVeiculo save(PosicaoVeiculo posicaoVeiculo) {
        return posicaoVeiculoRepository.save(posicaoVeiculo);
    }

    public void delete(Long id) {
        posicaoVeiculoRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    public void replace(PosicaoVeiculoPutRequestBody posicaoVeiculoPutRequestBody){
        PosicaoVeiculo posicaoVeiculoSave = findByIdOrThrowBadRequestException(posicaoVeiculoPutRequestBody.getId());

        posicaoVeiculoRepository.save(posicaoVeiculoSave);
    }

}

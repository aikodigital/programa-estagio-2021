package br.com.teste.java.testebackend.service.impl;


import br.com.teste.java.testebackend.domain.Veiculo;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.repository.VeiculoRepository;
import br.com.teste.java.testebackend.request.post.VeiculoPostRequestBody;
import br.com.teste.java.testebackend.request.put.VeiculoPutRequestBody;
import br.com.teste.java.testebackend.service.VeiculoServiceCustom;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class VeiculoService implements VeiculoServiceCustom {

    private final VeiculoRepository veiculoRepostory;

    @Override
    public Page<Veiculo> listAll(Pageable pageable) {
        return veiculoRepostory.findAll(pageable);
    }



    @Override
    public Veiculo findByIdOrThrowBadRequestException(Long id) {
        return veiculoRepostory.findById(id)
                .orElseThrow(()-> new BadRequestException("PosicaoVeiculo not found"));
    }

    @Override
    public List<Veiculo> findByLinha_Id(long id) {
        List<Long> veiculosId = veiculoRepostory.findByLinha_Id(id);

        List<Veiculo> veiculos = new ArrayList();

        for (long ids: veiculosId) {
            veiculos.add(findByIdOrThrowBadRequestException(ids));
        }

        return (veiculos.isEmpty()) ? null: veiculos;
    }

    @Override
    public void delete(Long id) {
        veiculoRepostory.delete(findByIdOrThrowBadRequestException(id));
    }

    @Override
    @Transactional
    public Veiculo save(VeiculoPostRequestBody veiculoPostRequestBody) {
        return veiculoRepostory.save(Veiculo.builder()
                .name(veiculoPostRequestBody.getName())
                .name(veiculoPostRequestBody.getName()).build());

    }
    @Override
    public void replace(VeiculoPutRequestBody veiculoPutRequestBody) {
        Veiculo veiculoSave = findByIdOrThrowBadRequestException(veiculoPutRequestBody.getId());

        Veiculo veiculoSaved = Veiculo.builder()
                .id(veiculoSave.getId())
                .name(veiculoPutRequestBody.getName())
                .build();

        veiculoRepostory.save(veiculoSaved);
    }



}

package br.com.teste.java.testebackend.service;


import br.com.teste.java.testebackend.domain.Linha;
import br.com.teste.java.testebackend.domain.Veiculo;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.repository.VeiculoRepository;
import br.com.teste.java.testebackend.requests.LinhaPostRequestBody;
import br.com.teste.java.testebackend.requests.VeiculoPostRequestBody;
import br.com.teste.java.testebackend.requests.VeiculoPutRequestBody;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class VeiculoService {

    private final VeiculoRepository veiculoRepostory;

    public Page<Veiculo> listAll(Pageable pageable) {
        return veiculoRepostory.findAll(pageable);
    }



    public Veiculo findByIdOrThrowBadRequestException(Long id) {
        return veiculoRepostory.findById(id)
                .orElseThrow(()-> new BadRequestException("PosicaoVeiculo not found"));
    }

    public List<Veiculo> findByLinha_Id(long id) {
        List<Long> veiculosId = veiculoRepostory.findByLinha_Id(id);

        List<Veiculo> veiculos = new ArrayList();

        for (long ids: veiculosId) {
            veiculos.add(findByIdOrThrowBadRequestException(ids));
        }

        return (veiculos.isEmpty()) ? null: veiculos;
    }

    public void delete(Long id) {
        veiculoRepostory.delete(findByIdOrThrowBadRequestException(id));
    }

    @Transactional
    public Veiculo save(VeiculoPostRequestBody veiculoPostRequestBody) {
        return veiculoRepostory.save(Veiculo.builder()
                .name(veiculoPostRequestBody.getName())
                .name(veiculoPostRequestBody.getName()).build());

    }
    public void replace(VeiculoPutRequestBody veiculoPutRequestBody) {
        Veiculo veiculoSave = findByIdOrThrowBadRequestException(veiculoPutRequestBody.getId());

        Veiculo veiculoSaved = Veiculo.builder()
                .id(veiculoSave.getId())
                .name(veiculoPutRequestBody.getName())
                .build();

        veiculoRepostory.save(veiculoSaved);
    }



}

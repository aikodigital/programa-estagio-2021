package br.com.teste.java.testebackend.service;

import br.com.teste.java.testebackend.domain.Veiculo;
import br.com.teste.java.testebackend.request.post.VeiculoPostRequestBody;
import br.com.teste.java.testebackend.request.put.VeiculoPutRequestBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import java.util.List;

public interface VeiculoServiceCustom {
    Page<Veiculo> listAll(Pageable pageable);

    Veiculo findByIdOrThrowBadRequestException(Long id);

    List<Veiculo> findByLinha_Id(long id);

    void delete(Long id);

    @Transactional
    Veiculo save(VeiculoPostRequestBody veiculoPostRequestBody);

    void replace(VeiculoPutRequestBody veiculoPutRequestBody);
}

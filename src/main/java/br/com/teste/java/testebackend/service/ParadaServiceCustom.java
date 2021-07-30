package br.com.teste.java.testebackend.service.impl;

import br.com.teste.java.testebackend.domain.Parada;
import br.com.teste.java.testebackend.request.post.ParadaPostRequestBody;
import br.com.teste.java.testebackend.request.put.ParadaPutRequestBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import java.util.List;

public interface ParadaServiceCustom {
    Page<Parada> listAll(Pageable pageable);

    Parada findByIdOrThrowBadRequestException(Long id);

    List<Parada> findByName(String name);

    @Transactional
    Parada save(ParadaPostRequestBody paradaPostRequestBody);

    void delete(Long id);

    void replace(ParadaPutRequestBody paradaPutRequestBody);
}

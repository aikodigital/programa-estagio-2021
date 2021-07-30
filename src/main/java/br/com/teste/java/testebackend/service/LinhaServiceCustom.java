package br.com.teste.java.testebackend.service;

import br.com.teste.java.testebackend.domain.Linha;
import br.com.teste.java.testebackend.request.post.LinhaPostRequestBody;
import br.com.teste.java.testebackend.request.put.LinhaPutRequestBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import java.util.List;

public interface LinhaServiceCustom {
    Page<Linha> listAll(Pageable pageable);

    Linha findByIdOrThrowBadRequestException(Long id);

    List<Linha> findByParada(Long id);

    @Transactional
    Linha save(LinhaPostRequestBody linhaPostRequestBody);

    void delete(Long id);

    void replace(LinhaPutRequestBody linhaPutRequestBody);
}

package br.com.teste.java.testebackend.service;

import br.com.teste.java.testebackend.domain.Line;
import br.com.teste.java.testebackend.request.post.LinePostRequestBody;
import br.com.teste.java.testebackend.request.put.LinePutRequestBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import java.util.List;

public interface LineServiceCustom {
    Page<Line> listAll(Pageable pageable);

    Line findByIdOrThrowBadRequestException(Long id);

    List<Line> findByParada(Long id);

    @Transactional
    Line save(LinePostRequestBody linePostRequestBody);

    void delete(Long id);

    void replace(LinePutRequestBody linePutRequestBody);
}

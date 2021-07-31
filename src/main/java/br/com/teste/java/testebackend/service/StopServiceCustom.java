package br.com.teste.java.testebackend.service;

import br.com.teste.java.testebackend.domain.Stop;
import br.com.teste.java.testebackend.request.post.StopPostRequestBody;
import br.com.teste.java.testebackend.request.put.StopPutRequestBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import java.util.List;

public interface StopServiceCustom {
    Page<Stop> listAll(Pageable pageable);

    Stop findByIdOrThrowBadRequestException(Long id);

    List<Stop> findByName(String name);

    @Transactional
    Stop save(StopPostRequestBody stopPostRequestBody);

    void delete(Long id);

    void replace(StopPutRequestBody stopPutRequestBody);
}

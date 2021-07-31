package br.com.teste.java.testebackend.api.resource.read;

import br.com.teste.java.testebackend.domain.Line;
import br.com.teste.java.testebackend.service.impl.LineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/linhas")
@Log4j2
@RequiredArgsConstructor
public class LineResourceRead {
    private final LineService linhaService;

    @GetMapping
    public ResponseEntity<Page<Line>> list(Pageable pageable){
        return ResponseEntity.ok(linhaService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Line> findById(@PathVariable Long id){
        return ResponseEntity.ok(linhaService.findByIdOrThrowBadRequestException(id));
    }

    @GetMapping(value = "parada/{id}")
    public ResponseEntity<List<Line>> findByParada(@PathVariable Long id){
        return ResponseEntity.ok(linhaService.findByParada(id));
    }
}

package br.com.teste.java.testebackend.api.resource.read;

import br.com.teste.java.testebackend.domain.Linha;
import br.com.teste.java.testebackend.service.LinhaService;
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
public class LinhaResourceRead {
    private final LinhaService linhaService;

    @GetMapping
    public ResponseEntity<Page<Linha>> list(Pageable pageable){
        return ResponseEntity.ok(linhaService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Linha> findById(@PathVariable Long id){
        return ResponseEntity.ok(linhaService.findByIdOrThrowBadRequestException(id));
    }

    @GetMapping(value = "parada/{id}")
    public ResponseEntity<List<Linha>> findByParada(@PathVariable Long id){
        return ResponseEntity.ok(linhaService.findByParada(id));
    }
}

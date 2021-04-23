package br.com.teste.java.testebackend.controller;

import br.com.teste.java.testebackend.domain.Linha;
import br.com.teste.java.testebackend.requests.LinhaPostRequestBody;
import br.com.teste.java.testebackend.requests.LinhaPutRequestBody;
import br.com.teste.java.testebackend.service.LinhaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/linhas")
@Log4j2
@RequiredArgsConstructor
public class LinhaController {

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

    @PostMapping
    public ResponseEntity<Linha> save(@RequestBody LinhaPostRequestBody linhaPostRequestBody){
        return new ResponseEntity<>(linhaService.save(linhaPostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        linhaService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody LinhaPutRequestBody linhaPutRequestBody) {
        linhaService.replace(linhaPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

package br.com.teste.java.testebackend.controller;

import br.com.teste.java.testebackend.domain.Linha;
import br.com.teste.java.testebackend.domain.Parada;
import br.com.teste.java.testebackend.requests.ParadaPostRequestBody;
import br.com.teste.java.testebackend.requests.ParadaPutRequestBody;
import br.com.teste.java.testebackend.service.ParadaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paradas")
@Log4j2
@RequiredArgsConstructor
public class ParadaController {

    private final ParadaService paradaService;

    @GetMapping
    public ResponseEntity<Page<Parada>> list(Pageable pageable){
        return ResponseEntity.ok(paradaService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Parada> findById(@PathVariable Long id){
        return ResponseEntity.ok(paradaService.findByIdOrThrowBadRequestException(id));
    }

    @GetMapping(value = "/buscar")
    public ResponseEntity<List<Parada>> findByName(@RequestParam String name){
        return ResponseEntity.ok(paradaService.findByName(name));
    }

    @PostMapping
    public ResponseEntity<Linha> save(@RequestBody ParadaPostRequestBody paradaPostRequestBody){
        return new ResponseEntity(paradaService.save(paradaPostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        paradaService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody ParadaPutRequestBody paradaPutRequestBody) {
        paradaService.replace(paradaPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

package br.com.teste.java.testebackend.controller;

import br.com.teste.java.testebackend.domain.Veiculo;
import br.com.teste.java.testebackend.requests.VeiculoPostRequestBody;
import br.com.teste.java.testebackend.requests.VeiculoPutRequestBody;
import br.com.teste.java.testebackend.service.VeiculoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/veiculos")
@Log4j2
@RequiredArgsConstructor
public class VeiculoController {

    private final VeiculoService veiculoService;

    @GetMapping
    public ResponseEntity<Page<Veiculo>> list(Pageable pageable){
        return ResponseEntity.ok(veiculoService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Veiculo> findById(@PathVariable Long id){
        return ResponseEntity.ok(veiculoService.findByIdOrThrowBadRequestException(id));
    }

    @GetMapping(value = "/buscar/veiculo/{id}")
    public ResponseEntity<List<Veiculo>> findByLinha(@PathVariable Long id){
        List<Veiculo> veiculos = veiculoService.findByLinha_Id(id);
        return (veiculos == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(veiculos);
    }

    @PostMapping
    public ResponseEntity<Veiculo> save(@RequestBody VeiculoPostRequestBody veiculoPostRequestBody){
        return new ResponseEntity<>(veiculoService.save(veiculoPostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        veiculoService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody VeiculoPutRequestBody veiculoPutRequestBody) {
        veiculoService.replace(veiculoPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

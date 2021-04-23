package br.com.teste.java.testebackend.controller;

import br.com.teste.java.testebackend.domain.Parada;
import br.com.teste.java.testebackend.domain.PosicaoVeiculo;
import br.com.teste.java.testebackend.requests.PosicaoVeiculoPostRequestBody;
import br.com.teste.java.testebackend.requests.PosicaoVeiculoPutRequestBody;
import br.com.teste.java.testebackend.service.PosicaoVeiculoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/PosicoesVeiculo")
@Log4j2
@RequiredArgsConstructor
public class PosicaoVeiculoController {

    private final PosicaoVeiculoService posicaoVeiculoService;

    @GetMapping
    public ResponseEntity<Page<PosicaoVeiculo>> list(Pageable pageable){
        return ResponseEntity.ok(posicaoVeiculoService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<PosicaoVeiculo> findById(@PathVariable Long id){
        return ResponseEntity.ok(posicaoVeiculoService.findByIdOrThrowBadRequestException(id));
    }

    @PostMapping
    public ResponseEntity<PosicaoVeiculo> save(@RequestBody PosicaoVeiculoPostRequestBody posicaoVeiculoPostRequestBody){
        PosicaoVeiculo posicaoVeiculo = PosicaoVeiculo.builder()
                .longitude(posicaoVeiculoPostRequestBody.getLongitude()).latitude(posicaoVeiculoPostRequestBody.getLatitude()).build();
        return new ResponseEntity<>(posicaoVeiculoService.save(posicaoVeiculo), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        posicaoVeiculoService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody PosicaoVeiculoPutRequestBody posicaoveiculoPutRequestBody) {
        posicaoVeiculoService.replace(posicaoveiculoPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

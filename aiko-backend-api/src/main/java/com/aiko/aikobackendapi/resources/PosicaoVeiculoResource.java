package com.aiko.aikobackendapi.resources;

import com.aiko.aikobackendapi.domain.PosicaoVeiculo;
import com.aiko.aikobackendapi.services.PosicaoVeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/posicaoveiculos")
public class PosicaoVeiculoResource {

    @Autowired
    private PosicaoVeiculoService posicaoVeiculoService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable long id) {
        PosicaoVeiculo posicaoVeiculo = posicaoVeiculoService.buscar(id);

        return (posicaoVeiculo == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(posicaoVeiculo));
    }

    @RequestMapping(value = "")
    public ResponseEntity<?> getAll() {
        List<PosicaoVeiculo> posicaoVeiculos = posicaoVeiculoService.listar();

        return (posicaoVeiculos == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(posicaoVeiculos);
    }

    @PostMapping(value = "")
    public ResponseEntity<?> post(@RequestBody PosicaoVeiculo posicaoVeiculo) {
        posicaoVeiculoService.adicionar(posicaoVeiculo);

        return ResponseEntity.created(URI.create("/posicaoveiculos/" +posicaoVeiculo.getId())).body(posicaoVeiculo);
    }

    @PutMapping(value = "")
    public ResponseEntity<?> put(@RequestBody PosicaoVeiculo posicaoVeiculo) {
        posicaoVeiculoService.atualizar(posicaoVeiculo);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "")
    public ResponseEntity<?> delete(@RequestBody PosicaoVeiculo posicaoVeiculo) {
        posicaoVeiculoService.deletar(posicaoVeiculo);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        posicaoVeiculoService.deletar(id);

        return ResponseEntity.ok().build();
    }

}

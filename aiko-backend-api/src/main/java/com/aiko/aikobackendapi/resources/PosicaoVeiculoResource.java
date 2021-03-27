package com.aiko.aikobackendapi.resources;

import com.aiko.aikobackendapi.domain.PosicaoVeiculo;
import com.aiko.aikobackendapi.services.PosicaoVeiculoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/posicaoveiculos")
@Api(value = "posicaoveiculos")
public class PosicaoVeiculoResource {

    @Autowired
    private PosicaoVeiculoService posicaoVeiculoService;

    @ApiOperation(value = "retorna PosicaoVeiculo por id")
    @ApiParam(value = "id")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable long id) {
        PosicaoVeiculo posicaoVeiculo = posicaoVeiculoService.buscar(id);

        return (posicaoVeiculo == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(posicaoVeiculo));
    }

    @ApiOperation(value = "retorna todas as PosicaoVeiculo List<PosicaoVeiculo>)")
    @RequestMapping(value = "")
    public ResponseEntity<?> getAll() {
        List<PosicaoVeiculo> posicaoVeiculos = posicaoVeiculoService.listar();

        return (posicaoVeiculos == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(posicaoVeiculos);
    }

    @ApiOperation(value = "salva uma PosicaoVeiculo")
    @ApiParam(value = "PosicaoVeiculo")
    @PostMapping(value = "")
    public ResponseEntity<?> post(@RequestBody PosicaoVeiculo posicaoVeiculo) {
        posicaoVeiculoService.adicionar(posicaoVeiculo);

        return ResponseEntity.created(URI.create("/posicaoveiculos/" +posicaoVeiculo.getId())).body(posicaoVeiculo);
    }

    @ApiOperation(value = "altera uma PosicaoVeiculo")
    @ApiParam(value = "PosicaoVeiculo")
    @PutMapping(value = "")
    public ResponseEntity<?> put(@RequestBody PosicaoVeiculo posicaoVeiculo) {
        posicaoVeiculoService.atualizar(posicaoVeiculo);

        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "deleta uma PosicaoVeiculo")
    @ApiParam(value = "PosicaoVeiculo")
    @DeleteMapping(value = "")
    public ResponseEntity<?> delete(@RequestBody PosicaoVeiculo posicaoVeiculo) {
        posicaoVeiculoService.deletar(posicaoVeiculo);

        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "deleta uma PosicaoVeiculo por id")
    @ApiParam(value = "id")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        posicaoVeiculoService.deletar(id);

        return ResponseEntity.ok().build();
    }

}

package com.aiko.aikobackendapi.resources;

import com.aiko.aikobackendapi.domain.Veiculo;
import com.aiko.aikobackendapi.services.VeiculoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/veiculos")
@Api(value = "veiculos")
public class VeiculoResource {

    @Autowired
    private VeiculoService veiculoService;

    @ApiOperation(value = "retorna Veiculo por id")
    @ApiParam(value = "id")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable long id) {
        Veiculo veiculo = veiculoService.buscar(id);

        return (veiculo == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(veiculo));
    }

    @ApiOperation(value = "retorna todos os Veiculos List<Veiculo>)")
    @RequestMapping(value = "")
    public ResponseEntity<?> getAll() {
        List<Veiculo> veiculos = veiculoService.listar();

        return (veiculos == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(veiculos);
    }

    @ApiOperation(value = "salva um Veiculo")
    @ApiParam(value = "Veiculo")
    @PostMapping(value = "")
    public ResponseEntity<?> post(@RequestBody Veiculo veiculo) {
        veiculoService.adicionar(veiculo);

        return ResponseEntity.created(URI.create("/veiculos/" +veiculo.getId())).body(veiculo);
    }

    @ApiOperation(value = "altera um Veiculo")
    @ApiParam(value = "Veiculo")
    @PutMapping(value = "")
    public ResponseEntity<?> put(@RequestBody Veiculo veiculo) {
        veiculoService.atualizar(veiculo);

        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "deleta um Veiculo")
    @ApiParam(value = "Veiculo")
    @DeleteMapping(value = "")
    public ResponseEntity<?> delete(@RequestBody Veiculo veiculo) {
        veiculoService.deletar(veiculo);

        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "deleta um Veiculo por id")
    @ApiParam(value = "Veiculo")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        veiculoService.deletar(id);

        return ResponseEntity.ok().build();
    }

    //Recebe o identificador de uma linha e retorna os veículos associados a linha informada
    @ApiOperation(value = "Recebe o identificador de uma linha e retorna os veículos associados a linha informada")
    @ApiParam(value = "id")
    @RequestMapping(value = "/linha/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getVeiculosPorLinha(@PathVariable long id) {
        List<Veiculo> veiculos = veiculoService.veiculosPorLinha(id);

        return (veiculos == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(veiculos);
    }

}

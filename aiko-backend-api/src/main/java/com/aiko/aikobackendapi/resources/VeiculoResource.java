package com.aiko.aikobackendapi.resources;

import com.aiko.aikobackendapi.domain.Veiculo;
import com.aiko.aikobackendapi.services.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/veiculos")
public class VeiculoResource {

    @Autowired
    private VeiculoService veiculoService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable long id) {
        Veiculo veiculo = veiculoService.buscar(id);

        return (veiculo == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(veiculo));
    }

    @RequestMapping(value = "")
    public ResponseEntity<?> getAll() {
        List<Veiculo> veiculos = veiculoService.listar();

        return (veiculos == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(veiculos);
    }

    @PostMapping(value = "")
    public ResponseEntity<?> post(@RequestBody Veiculo veiculo) {
        veiculoService.adicionar(veiculo);

        return ResponseEntity.created(URI.create("/veiculos/" +veiculo.getId())).body(veiculo);
    }

    @PutMapping(value = "")
    public ResponseEntity<?> put(@RequestBody Veiculo veiculo) {
        veiculoService.atualizar(veiculo);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "")
    public ResponseEntity<?> delete(@RequestBody Veiculo veiculo) {
        veiculoService.deletar(veiculo);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        veiculoService.deletar(id);

        return ResponseEntity.ok().build();
    }

}

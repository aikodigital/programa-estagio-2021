package com.aiko.aikobackendapi.resources;

import com.aiko.aikobackendapi.domain.Parada;
import com.aiko.aikobackendapi.services.ParadaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/paradas")
public class ParadaResource {
    @Autowired
    private ParadaService paradaService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable long id) {
        Parada parada =  paradaService.buscar(id);

        return (parada == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(parada));
    }

    @RequestMapping(value = "")
    public ResponseEntity<?> getAll() {
        List<Parada> paradas =  paradaService.listar();

        return (paradas == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(paradas);
    }

    @PostMapping(value = "")
    public ResponseEntity<?> post(@RequestBody Parada parada) {
        paradaService.adicionar(parada);

        return ResponseEntity.created(URI.create("/veiculos/" +parada.getId())).body(parada);
    }

    @PutMapping(value = "")
    public ResponseEntity<?> put(@RequestBody Parada parada) {
        paradaService.atualizar(parada);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "")
    public ResponseEntity<?> delete(@RequestBody Parada parada) {
        paradaService.deletar(parada);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        paradaService.deletar(id);

        return ResponseEntity.ok().build();
    }



}

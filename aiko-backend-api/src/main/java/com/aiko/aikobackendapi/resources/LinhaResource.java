package com.aiko.aikobackendapi.resources;

import com.aiko.aikobackendapi.domain.Linha;
import com.aiko.aikobackendapi.services.LinhaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/linhas")
public class LinhaResource {

    @Autowired
    private LinhaService linhaService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable long id) {
        Linha linha = linhaService.buscar(id);

        return (linha == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(linha));
    }

    @RequestMapping(value = "")
    public ResponseEntity<?> getAll() {
        List<Linha> linhas = linhaService.listar();

        return (linhas == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(linhas);
    }

    @PostMapping(value = "")
    public ResponseEntity<?> post(@RequestBody Linha linha) {
        linhaService.adicionar(linha);

        return ResponseEntity.created(URI.create("/linhas/" +linha.getId())).body(linha);
    }

    @PutMapping(value = "")
    public ResponseEntity<?> put(@RequestBody Linha linha) {
        linhaService.atualizar(linha);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "")
    public ResponseEntity<?> delete(@RequestBody Linha linha) {
        linhaService.deletar(linha);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        linhaService.deletar(id);

        return ResponseEntity.ok().build();
    }

    //Recebe o identificador de uma parada e retorna as linhas associadas a parada informada
    @RequestMapping(value = "/parada/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getLinhasPorParada(@PathVariable long id) {
        List<Linha> linhas = linhaService.linhasPorParada(id);

        return (linhas == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(linhas);
    }

}

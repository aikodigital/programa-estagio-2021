package com.aiko.aikobackendapi.resources;

import com.aiko.aikobackendapi.domain.Linha;
import com.aiko.aikobackendapi.services.LinhaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/linhas")
@Api(value = "linhas")
public class LinhaResource {

    @Autowired
    private LinhaService linhaService;

    @ApiOperation(value = "retorna Linha por ID")
    @ApiParam(value = "id")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable long id) {
        Linha linha = linhaService.buscar(id);

        return (linha == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(linha));
    }

    @ApiOperation(value = "retorna todas as Linhas (List<Linha>)")
    @RequestMapping(value = "")
    public ResponseEntity<?> getAll() {
        List<Linha> linhas = linhaService.listar();

        return (linhas == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(linhas);
    }

    @ApiOperation(value = "salva uma Linha")
    @ApiParam(value = "Linha")
    @PostMapping(value = "")
    public ResponseEntity<?> post(@RequestBody Linha linha) {
        linhaService.adicionar(linha);

        return ResponseEntity.created(URI.create("/linhas/" +linha.getId())).body(linha);
    }

    @ApiOperation(value = "altera uma Linha")
    @ApiParam(value = "Linha")
    @PutMapping(value = "")
    public ResponseEntity<?> put(@RequestBody Linha linha) {
        linhaService.atualizar(linha);

        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "deleta uma Linha")
    @ApiParam(value = "Linha")
    @DeleteMapping(value = "")
    public ResponseEntity<?> delete(@RequestBody Linha linha) {
        linhaService.deletar(linha);

        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "deleta uma Linha por ID")
    @ApiParam(value = "id")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        linhaService.deletar(id);

        return ResponseEntity.ok().build();
    }

    //Recebe o identificador de uma parada e retorna as linhas associadas a parada informada
    @ApiOperation(value = "recebe o identificador de uma parada e retorna as linhas associadas a parada informada")
    @ApiParam(value = "id")
    @RequestMapping(value = "/parada/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getLinhasPorParada(@PathVariable long id) {
        List<Linha> linhas = linhaService.linhasPorParada(id);

        return (linhas == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(linhas);
    }

}

package com.aiko.aikobackendapi.resources;

import com.aiko.aikobackendapi.domain.Parada;
import com.aiko.aikobackendapi.services.ParadaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/paradas")
@Api(value = "paradas")
public class ParadaResource {
    @Autowired
    private ParadaService paradaService;

    @ApiOperation(value = "retorna Parada por id")
    @ApiParam(value = "id")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable long id) {
        Parada parada =  paradaService.buscar(id);

        return (parada == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(parada));
    }

    @ApiOperation(value = "retorna todas as Paradas List<Parada>)")
    @RequestMapping(value = "")
    public ResponseEntity<?> getAll() {
        List<Parada> paradas =  paradaService.listar();

        return (paradas == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(paradas);
    }

    @ApiOperation(value = "salva uma Parada")
    @ApiParam(value = "Parada")
    @PostMapping(value = "")
    public ResponseEntity<?> post(@RequestBody Parada parada) {
        paradaService.adicionar(parada);

        return ResponseEntity.created(URI.create("/veiculos/" +parada.getId())).body(parada);
    }

    @ApiOperation(value = "altera uma Parada")
    @ApiParam(value = "Parada")
    @PutMapping(value = "")
    public ResponseEntity<?> put(@RequestBody Parada parada) {
        paradaService.atualizar(parada);

        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "deleta uma Parada")
    @ApiParam(value = "Parada")
    @DeleteMapping(value = "")
    public ResponseEntity<?> delete(@RequestBody Parada parada) {
        paradaService.deletar(parada);

        return ResponseEntity.ok().build();
    }

    @ApiOperation(value = "deleta uma Parada por id")
    @ApiParam(value = "id")
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) {
        paradaService.deletar(id);

        return ResponseEntity.ok().build();
    }

    //Recebe uma posição (lat, long) como parâmetro e retorna a parada mais proxima a posição informada
    @ApiOperation(value = "Recebe uma posição (lat, long) como parâmetro e retorna a parada mais proxima a posição informada")
    @ApiParam(value = "latitude, longitude")
    @RequestMapping(value = "/posicao/{latitude}/{longitude}", method = RequestMethod.GET)
    public ResponseEntity<?> paradaPorPosicao(@PathVariable double latitude, @PathVariable double longitude) {
        Parada parada =  paradaService.paradasPorPosicao(latitude, longitude);

        return (parada == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(parada));
    }



}

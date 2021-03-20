package com.aiko.aikobackendapi.resources;

import ch.qos.logback.core.boolex.EvaluationException;
import com.aiko.aikobackendapi.domain.Veiculo;
import com.aiko.aikobackendapi.services.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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

}

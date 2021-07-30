package br.com.teste.java.testebackend.api.resource.read;

import br.com.teste.java.testebackend.domain.Parada;
import br.com.teste.java.testebackend.service.impl.ParadaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paradas")
@Log4j2
@RequiredArgsConstructor
public class ParadaResourceRead {

    private final ParadaService paradaService;

    @GetMapping
    public ResponseEntity<Page<Parada>> list(Pageable pageable){
        return ResponseEntity.ok(paradaService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Parada> findById(@PathVariable Long id){
        return ResponseEntity.ok(paradaService.findByIdOrThrowBadRequestException(id));
    }

    @GetMapping(value = "/buscar")
    public ResponseEntity<List<Parada>> findByName(@RequestParam String name){
        return ResponseEntity.ok(paradaService.findByName(name));
    }

}

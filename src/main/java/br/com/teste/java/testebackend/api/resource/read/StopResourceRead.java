package br.com.teste.java.testebackend.api.resource.read;

import br.com.teste.java.testebackend.domain.Stop;
import br.com.teste.java.testebackend.service.impl.StopService;
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
public class StopResourceRead {

    private final StopService stopService;

    @GetMapping
    public ResponseEntity<Page<Stop>> list(Pageable pageable){
        return ResponseEntity.ok(stopService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Stop> findById(@PathVariable Long id){
        return ResponseEntity.ok(stopService.findByIdOrThrowBadRequestException(id));
    }

    @GetMapping(value = "/buscar")
    public ResponseEntity<List<Stop>> findByName(@RequestParam String name){
        return ResponseEntity.ok(stopService.findByName(name));
    }

}

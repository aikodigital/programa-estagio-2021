package br.com.teste.java.testebackend.api.resource.read;

import br.com.teste.java.testebackend.domain.Veiculo;
import br.com.teste.java.testebackend.service.impl.VeiculoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/veiculos")
@Log4j2
@RequiredArgsConstructor
public class VeiculoResourceRead {

    private final VeiculoService veiculoService;

    @GetMapping
    public ResponseEntity<Page<Veiculo>> list(Pageable pageable){
        return ResponseEntity.ok(veiculoService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Veiculo> findById(@PathVariable Long id){
        return ResponseEntity.ok(veiculoService.findByIdOrThrowBadRequestException(id));
    }

    @GetMapping(value = "/buscar/veiculo/{id}")
    public ResponseEntity<List<Veiculo>> findByLinha(@PathVariable Long id){
        List<Veiculo> veiculos = veiculoService.findByLinha_Id(id);
        return (veiculos == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(veiculos);
    }
}

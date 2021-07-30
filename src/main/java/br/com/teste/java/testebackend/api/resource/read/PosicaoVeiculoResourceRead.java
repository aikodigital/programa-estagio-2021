package br.com.teste.java.testebackend.api.resource.read;

import br.com.teste.java.testebackend.domain.PosicaoVeiculo;
import br.com.teste.java.testebackend.service.impl.PosicaoVeiculoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/PosicoesVeiculo")
@Log4j2
@RequiredArgsConstructor
public class PosicaoVeiculoResourceRead {

    private final PosicaoVeiculoService posicaoVeiculoService;

    @GetMapping
    public ResponseEntity<Page<PosicaoVeiculo>> list(Pageable pageable){
        return ResponseEntity.ok(posicaoVeiculoService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<PosicaoVeiculo> findById(@PathVariable Long id){
        return ResponseEntity.ok(posicaoVeiculoService.findByIdOrThrowBadRequestException(id));
    }
}

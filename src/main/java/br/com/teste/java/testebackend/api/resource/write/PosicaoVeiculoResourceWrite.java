package br.com.teste.java.testebackend.api.resource.write;

import br.com.teste.java.testebackend.domain.PosicaoVeiculo;
import br.com.teste.java.testebackend.request.post.PosicaoVeiculoPostRequestBody;
import br.com.teste.java.testebackend.request.put.PosicaoVeiculoPutRequestBody;
import br.com.teste.java.testebackend.service.PosicaoVeiculoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/PosicoesVeiculo")
@Log4j2
@RequiredArgsConstructor
public class PosicaoVeiculoResourceWrite {

    private final PosicaoVeiculoService posicaoVeiculoService;

    @PostMapping
    public ResponseEntity<PosicaoVeiculo> save(@RequestBody PosicaoVeiculoPostRequestBody posicaoVeiculoPostRequestBody) {
      PosicaoVeiculo posicaoVeiculo = PosicaoVeiculo.builder()
                .longitude(posicaoVeiculoPostRequestBody.getLongitude()).latitude(posicaoVeiculoPostRequestBody.getLatitude()).build();
        return new ResponseEntity<>(posicaoVeiculoService.save(posicaoVeiculo), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        posicaoVeiculoService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody PosicaoVeiculoPutRequestBody posicaoveiculoPutRequestBody) {
        posicaoVeiculoService.replace(posicaoveiculoPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

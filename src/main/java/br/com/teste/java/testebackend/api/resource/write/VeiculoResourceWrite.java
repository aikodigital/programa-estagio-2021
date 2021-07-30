package br.com.teste.java.testebackend.api.resource.write;

import br.com.teste.java.testebackend.domain.Veiculo;
import br.com.teste.java.testebackend.request.post.VeiculoPostRequestBody;
import br.com.teste.java.testebackend.request.put.VeiculoPutRequestBody;
import br.com.teste.java.testebackend.service.VeiculoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/veiculos")
@Log4j2
@RequiredArgsConstructor
public class VeiculoResourceWrite {

    private final VeiculoService veiculoService;

    @PostMapping
    public ResponseEntity<Veiculo> save(@RequestBody VeiculoPostRequestBody veiculoPostRequestBody){
        return new ResponseEntity<>(veiculoService.save(veiculoPostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        veiculoService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody VeiculoPutRequestBody veiculoPutRequestBody) {
        veiculoService.replace(veiculoPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

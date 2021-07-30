package br.com.teste.java.testebackend.api.resource.write;

import br.com.teste.java.testebackend.domain.Linha;
import br.com.teste.java.testebackend.request.post.LinhaPostRequestBody;
import br.com.teste.java.testebackend.request.put.LinhaPutRequestBody;
import br.com.teste.java.testebackend.service.LinhaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/linhas")
@Log4j2
@RequiredArgsConstructor
public class LinhaResourceWrite {

    private final LinhaService linhaService;

    @PostMapping
    public ResponseEntity<Linha> save(@RequestBody LinhaPostRequestBody linhaPostRequestBody){
        return new ResponseEntity<>(linhaService.save(linhaPostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        linhaService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody LinhaPutRequestBody linhaPutRequestBody) {
        linhaService.replace(linhaPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

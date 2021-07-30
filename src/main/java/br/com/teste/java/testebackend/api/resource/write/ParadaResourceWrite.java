package br.com.teste.java.testebackend.api.resource.write;

import br.com.teste.java.testebackend.domain.Linha;
import br.com.teste.java.testebackend.request.post.ParadaPostRequestBody;
import br.com.teste.java.testebackend.request.put.ParadaPutRequestBody;
import br.com.teste.java.testebackend.service.impl.ParadaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/paradas")
@Log4j2
@RequiredArgsConstructor
public class ParadaResourceWrite {

    private final ParadaService paradaService;

    @PostMapping
    public ResponseEntity<Linha> save(@RequestBody ParadaPostRequestBody paradaPostRequestBody){
        return new ResponseEntity(paradaService.save(paradaPostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        paradaService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody ParadaPutRequestBody paradaPutRequestBody) {
        paradaService.replace(paradaPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

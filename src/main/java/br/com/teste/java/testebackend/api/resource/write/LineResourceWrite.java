package br.com.teste.java.testebackend.api.resource.write;

import br.com.teste.java.testebackend.domain.Line;
import br.com.teste.java.testebackend.request.post.LinePostRequestBody;
import br.com.teste.java.testebackend.request.put.LinePutRequestBody;
import br.com.teste.java.testebackend.service.impl.LineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/linhas")
@Log4j2
@RequiredArgsConstructor
public class LineResourceWrite {

    private final LineService linhaService;

    @PostMapping
    public ResponseEntity<Line> save(@RequestBody LinePostRequestBody linePostRequestBody){
        return new ResponseEntity<>(linhaService.save(linePostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        linhaService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody LinePutRequestBody linePutRequestBody) {
        linhaService.replace(linePutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

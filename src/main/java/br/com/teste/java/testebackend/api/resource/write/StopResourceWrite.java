package br.com.teste.java.testebackend.api.resource.write;

import br.com.teste.java.testebackend.domain.Line;
import br.com.teste.java.testebackend.request.post.StopPostRequestBody;
import br.com.teste.java.testebackend.request.put.StopPutRequestBody;
import br.com.teste.java.testebackend.service.impl.StopService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/paradas")
@Log4j2
@RequiredArgsConstructor
public class StopResourceWrite {

    private final StopService stopService;

    @PostMapping
    public ResponseEntity<Line> save(@RequestBody StopPostRequestBody stopPostRequestBody){
        return new ResponseEntity(stopService.save(stopPostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        stopService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody StopPutRequestBody stopPutRequestBody) {
        stopService.replace(stopPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

package br.com.teste.java.testebackend.api.resource.write;

import br.com.teste.java.testebackend.domain.VehiclePosition;
import br.com.teste.java.testebackend.request.post.VehiclePositionPostRequestBody;
import br.com.teste.java.testebackend.request.put.VehiclePositionPutRequestBody;
import br.com.teste.java.testebackend.service.impl.VehiclePositionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/PosicoesVeiculo")
@Log4j2
@RequiredArgsConstructor
public class VehiclePositionResourceWrite {

    private final VehiclePositionService vehiclePositionService;

    @PostMapping
    public ResponseEntity<VehiclePosition> save(@RequestBody VehiclePositionPostRequestBody vehiclePositionPostRequestBody) {
      VehiclePosition vehiclePosition = VehiclePosition.builder()
                .longitude(vehiclePositionPostRequestBody.getLongitude()).latitude(vehiclePositionPostRequestBody.getLatitude()).build();
        return new ResponseEntity<>(vehiclePositionService.save(vehiclePosition), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        vehiclePositionService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody VehiclePositionPutRequestBody posicaoveiculoPutRequestBody) {
        vehiclePositionService.replace(posicaoveiculoPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

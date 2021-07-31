package br.com.teste.java.testebackend.api.resource.write;

import br.com.teste.java.testebackend.domain.Vehicle;
import br.com.teste.java.testebackend.request.post.VehiclePostRequestBody;
import br.com.teste.java.testebackend.request.put.VehiclePutRequestBody;
import br.com.teste.java.testebackend.service.impl.VehicleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/veiculos")
@Log4j2
@RequiredArgsConstructor
public class VehicleResourceWrite {

    private final VehicleService vehicleService;

    @PostMapping
    public ResponseEntity<Vehicle> save(@RequestBody VehiclePostRequestBody vehiclePostRequestBody){
        return new ResponseEntity<>(vehicleService.save(vehiclePostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        vehicleService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody VehiclePutRequestBody vehiclePutRequestBody) {
        vehicleService.replace(vehiclePutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

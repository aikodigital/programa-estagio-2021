package br.com.teste.java.testebackend.api.resource.read;

import br.com.teste.java.testebackend.domain.Vehicle;
import br.com.teste.java.testebackend.service.impl.VehicleService;
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
public class VehicleResourceRead {

    private final VehicleService vehicleService;

    @GetMapping
    public ResponseEntity<Page<Vehicle>> list(Pageable pageable){
        return ResponseEntity.ok(vehicleService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Vehicle> findById(@PathVariable Long id){
        return ResponseEntity.ok(vehicleService.findByIdOrThrowBadRequestException(id));
    }

    @GetMapping(value = "/buscar/veiculo/{id}")
    public ResponseEntity<List<Vehicle>> findByLinha(@PathVariable Long id){
        List<Vehicle> vehicles = vehicleService.findByLinha_Id(id);
        return (vehicles == null) ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(vehicles);
    }
}

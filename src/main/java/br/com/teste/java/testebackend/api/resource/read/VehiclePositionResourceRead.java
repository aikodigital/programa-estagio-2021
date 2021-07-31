package br.com.teste.java.testebackend.api.resource.read;

import br.com.teste.java.testebackend.domain.VehiclePosition;
import br.com.teste.java.testebackend.service.impl.VehiclePositionService;
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
public class VehiclePositionResourceRead {

    private final VehiclePositionService vehiclePositionService;

    @GetMapping
    public ResponseEntity<Page<VehiclePosition>> list(Pageable pageable){
        return ResponseEntity.ok(vehiclePositionService.listAll(pageable));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<VehiclePosition> findById(@PathVariable Long id){
        return ResponseEntity.ok(vehiclePositionService.findByIdOrThrowBadRequestException(id));
    }
}

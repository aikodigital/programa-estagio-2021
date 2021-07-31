package br.com.teste.java.testebackend.service;

import br.com.teste.java.testebackend.domain.Vehicle;
import br.com.teste.java.testebackend.request.post.VehiclePostRequestBody;
import br.com.teste.java.testebackend.request.put.VehiclePutRequestBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;
import java.util.List;

public interface VehicleServiceCustom {
    Page<Vehicle> listAll(Pageable pageable);

    Vehicle findByIdOrThrowBadRequestException(Long id);

    List<Vehicle> findByLinha_Id(long id);

    void delete(Long id);

    @Transactional
    Vehicle save(VehiclePostRequestBody vehiclePostRequestBody);

    void replace(VehiclePutRequestBody vehiclePutRequestBody);
}

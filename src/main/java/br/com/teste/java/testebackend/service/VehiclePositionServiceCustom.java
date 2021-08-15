package br.com.teste.java.testebackend.service;

import br.com.teste.java.testebackend.domain.VehiclePosition;
import br.com.teste.java.testebackend.request.post.VehiclePositionPostRequestBody;
import br.com.teste.java.testebackend.request.put.VehiclePositionPutRequestBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.transaction.Transactional;

public interface VehiclePositionServiceCustom {
    Page<VehiclePosition> listAll(Pageable pageable);

    VehiclePosition findByIdOrThrowBadRequestException(Long id);

    @Transactional
    VehiclePosition save(VehiclePositionPostRequestBody vehiclePositionPostRequestBody);

    void delete(Long id);

    void replace(VehiclePositionPutRequestBody vehiclePositionPutRequestBody);
}

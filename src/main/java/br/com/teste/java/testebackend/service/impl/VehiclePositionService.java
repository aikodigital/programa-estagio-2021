package br.com.teste.java.testebackend.service.impl;


import br.com.teste.java.testebackend.domain.VehiclePosition;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.mapper.VehiclePositionMapper;
import br.com.teste.java.testebackend.repository.VehiclePositionRepository;
import br.com.teste.java.testebackend.request.post.VehiclePositionPostRequestBody;
import br.com.teste.java.testebackend.request.put.VehiclePositionPutRequestBody;
import br.com.teste.java.testebackend.service.VehiclePositionServiceCustom;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@RequiredArgsConstructor
public class VehiclePositionService implements VehiclePositionServiceCustom {

    private final VehiclePositionRepository vehiclePositionRepository;

    @Override
    public Page<VehiclePosition> listAll(Pageable pageable) {
        return vehiclePositionRepository.findAll(pageable);
    }

    @Override
    public VehiclePosition findByIdOrThrowBadRequestException(Long id) {
        return vehiclePositionRepository.findById(id)
                .orElseThrow(()-> new BadRequestException("VehiclePosition not found"));
    }

    @Override
    @Transactional
    public VehiclePosition save(VehiclePositionPostRequestBody vehiclePositionPostRequestBody) {
        VehiclePositionMapper.INSTANCE.toVehiclePosition(vehiclePositionPostRequestBody);
        return vehiclePositionRepository.save(VehiclePositionMapper.INSTANCE.toVehiclePosition(vehiclePositionPostRequestBody));
    }

    @Override
    public void delete(Long id) {
        vehiclePositionRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    @Override
    public void replace(VehiclePositionPutRequestBody vehiclePositionPutRequestBody){
        var vehiclePositionSave = findByIdOrThrowBadRequestException(vehiclePositionPutRequestBody.getId());
        VehiclePositionMapper.INSTANCE.toVehiclePosition(vehiclePositionPutRequestBody);
        vehiclePositionSave.setVehicleId(vehiclePositionSave.getId());
        vehiclePositionRepository.save(vehiclePositionSave);
    }

}

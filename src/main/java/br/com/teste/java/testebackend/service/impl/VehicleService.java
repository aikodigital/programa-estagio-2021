package br.com.teste.java.testebackend.service.impl;


import br.com.teste.java.testebackend.domain.Vehicle;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.mapper.VehicleMapper;
import br.com.teste.java.testebackend.repository.VehicleRepository;
import br.com.teste.java.testebackend.request.post.VehiclePostRequestBody;
import br.com.teste.java.testebackend.request.put.VehiclePutRequestBody;
import br.com.teste.java.testebackend.service.VehicleServiceCustom;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class VehicleService implements VehicleServiceCustom {

    private final VehicleRepository vehicleRepository;

    @Override
    public Page<Vehicle> listAll(Pageable pageable) {
        return vehicleRepository.findAll(pageable);
    }



    @Override
    public Vehicle findByIdOrThrowBadRequestException(Long id) {
        return vehicleRepository.findById(id)
                .orElseThrow(()-> new BadRequestException("VehiclePosition not found"));
    }

    @Override
    public List<Vehicle> findByLinha_Id(long id) {
        List<Long> vehiclesId = vehicleRepository.findByLineId(id);

        List<Vehicle> vehicles = new ArrayList();

        for (long ids: vehiclesId) {
            vehicles.add(findByIdOrThrowBadRequestException(ids));
        }

        return (vehicles.isEmpty()) ? null: vehicles;
    }

    @Override
    public void delete(Long id) {
        vehicleRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    @Override
    @Transactional
    public Vehicle save(VehiclePostRequestBody vehiclePostRequestBody) {
        VehicleMapper.INSTANCE.toVehicle(vehiclePostRequestBody);
        return vehicleRepository.save( VehicleMapper.INSTANCE.toVehicle(vehiclePostRequestBody));
    }
    @Override
    public void replace(VehiclePutRequestBody vehiclePutRequestBody) {
        var vehicleSave = findByIdOrThrowBadRequestException(vehiclePutRequestBody.getId());
        VehicleMapper.INSTANCE.toVehicle(vehiclePutRequestBody);
        vehicleSave.setId(vehicleSave.getId());
        vehicleRepository.save(vehicleSave);
    }



}

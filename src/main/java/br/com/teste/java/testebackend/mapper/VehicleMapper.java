package br.com.teste.java.testebackend.mapper;

import br.com.teste.java.testebackend.domain.Vehicle;
import br.com.teste.java.testebackend.request.post.VehiclePostRequestBody;
import br.com.teste.java.testebackend.request.put.VehiclePutRequestBody;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public abstract class VehicleMapper {
    public static final VehicleMapper INSTANCE = Mappers.getMapper(VehicleMapper.class);

    public abstract Vehicle toVehicle(VehiclePostRequestBody vehiclePostRequestBody);

    public abstract Vehicle toVehicle(VehiclePutRequestBody vehiclePutRequestBody);
}

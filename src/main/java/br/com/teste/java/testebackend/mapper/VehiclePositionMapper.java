package br.com.teste.java.testebackend.mapper;

import br.com.teste.java.testebackend.domain.VehiclePosition;
import br.com.teste.java.testebackend.request.post.VehiclePositionPostRequestBody;
import br.com.teste.java.testebackend.request.put.VehiclePositionPutRequestBody;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public abstract class VehiclePositionMapper {
    public static final VehiclePositionMapper INSTANCE = Mappers.getMapper(VehiclePositionMapper.class);

    public abstract VehiclePosition toVehiclePosition(VehiclePositionPostRequestBody vehiclePositionPostRequestBody);

    public abstract VehiclePosition toVehiclePosition(VehiclePositionPutRequestBody vehiclePositionPutRequestBody);
}

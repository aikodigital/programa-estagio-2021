package br.com.teste.java.testebackend.mapper;

import br.com.teste.java.testebackend.domain.Stop;
import br.com.teste.java.testebackend.request.post.StopPostRequestBody;
import br.com.teste.java.testebackend.request.put.StopPutRequestBody;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public abstract class StopMapper {
    public static final StopMapper INSTANCE = Mappers.getMapper(StopMapper.class);

    public abstract Stop toStop(StopPostRequestBody stopPostRequestBody);

    public abstract Stop toStop(StopPutRequestBody stopPutRequestBody);
}

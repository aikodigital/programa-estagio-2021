package br.com.teste.java.testebackend.mapper;

import br.com.teste.java.testebackend.domain.Line;
import br.com.teste.java.testebackend.request.post.LinePostRequestBody;
import br.com.teste.java.testebackend.request.put.LinePutRequestBody;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public abstract class LineMapper {
    public static final LineMapper INSTANCE = Mappers.getMapper(LineMapper.class);

    public abstract Line toLine(LinePostRequestBody linePostRequestBody);

    public abstract Line toLine(LinePutRequestBody linePutRequestBody);
}

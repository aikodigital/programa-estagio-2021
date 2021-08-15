package br.com.teste.java.testebackend.service.impl;

import br.com.teste.java.testebackend.domain.Line;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.mapper.LineMapper;
import br.com.teste.java.testebackend.repository.LineRepository;
import br.com.teste.java.testebackend.request.post.LinePostRequestBody;
import br.com.teste.java.testebackend.request.put.LinePutRequestBody;
import br.com.teste.java.testebackend.service.LineServiceCustom;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
@RequiredArgsConstructor
public class LineService implements LineServiceCustom {

    private final LineRepository lineRepository;

    @Override
    public Page<Line> listAll(Pageable pageable) {
        return lineRepository.findAll(pageable);
    }

    @Override
    public Line findByIdOrThrowBadRequestException(Long id) {
        Optional<Line> linha = lineRepository.findById(id);

        lineRepository.findById(id).orElseThrow(()-> new BadRequestException("Line not found"));
        return linha.orElseThrow();
    }

    @Override
    public List<Line> findByParada(Long id) {
        List<Long> linesId = lineRepository.findByStopsId(id);
        List<Line> lines = new ArrayList();
        for (Long ids: linesId) {
            lines.add(findByIdOrThrowBadRequestException(ids));
        }
        return (lines.isEmpty()) ? null: lines;
    }


    @Override
    @Transactional
    public Line save(LinePostRequestBody linePostRequestBody) {
        LineMapper.INSTANCE.toLine(linePostRequestBody);
        return lineRepository.save(LineMapper.INSTANCE.toLine(linePostRequestBody));
    }

    @Override
    public void delete(Long id) {
        lineRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    @Override
    public void replace(LinePutRequestBody linePutRequestBody){
        var lineSave = findByIdOrThrowBadRequestException(linePutRequestBody.getId());
        Line line = LineMapper.INSTANCE.toLine(linePutRequestBody);
        line.setId(lineSave.getId());
        lineRepository.save(line);
    }
}
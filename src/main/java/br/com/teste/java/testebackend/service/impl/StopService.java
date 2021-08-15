package br.com.teste.java.testebackend.service.impl;


import br.com.teste.java.testebackend.domain.Stop;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.exceptions.NotFoundException;
import br.com.teste.java.testebackend.mapper.LineMapper;
import br.com.teste.java.testebackend.mapper.StopMapper;
import br.com.teste.java.testebackend.repository.StopRepository;
import br.com.teste.java.testebackend.request.post.StopPostRequestBody;
import br.com.teste.java.testebackend.request.put.StopPutRequestBody;
import br.com.teste.java.testebackend.service.StopServiceCustom;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class StopService implements StopServiceCustom {

    private final StopRepository stopRepository;

    @Override
    public Page<Stop> listAll(Pageable pageable) {
        return stopRepository.findAll(pageable);
    }

    @Override
    public Stop findByIdOrThrowBadRequestException(Long id) {
        return stopRepository.findById(id)
                .orElseThrow(()-> new BadRequestException("Stop not found"));
    }

    @Override
    public List<Stop> findByName(String name) {
        List<Stop> stops = stopRepository.findByName(name);
        if(stops.isEmpty()){
            throw new NotFoundException("Line not found");
        }
        return stops;
    }

    @Override
    @Transactional
    public Stop save(StopPostRequestBody stopPostRequestBody) {
        StopMapper.INSTANCE.toStop(stopPostRequestBody);
        return stopRepository.save(StopMapper.INSTANCE.toStop(stopPostRequestBody));
    }

    @Override
    public void delete(Long id) {
        stopRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    @Override
    public void replace(StopPutRequestBody stopPutRequestBody){
        var stopSave = findByIdOrThrowBadRequestException(stopPutRequestBody.getId());
        Stop stop = StopMapper.INSTANCE.toStop(stopPutRequestBody);
        stop.setId(stopSave.getId());
        stopRepository.save(stopSave);
    }

}
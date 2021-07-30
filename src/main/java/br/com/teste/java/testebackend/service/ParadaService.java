package br.com.teste.java.testebackend.service;


import br.com.teste.java.testebackend.domain.Parada;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.exceptions.NotFoundException;
import br.com.teste.java.testebackend.repository.ParadaRepository;
import br.com.teste.java.testebackend.request.post.ParadaPostRequestBody;
import br.com.teste.java.testebackend.request.put.ParadaPutRequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ParadaService {

    private final ParadaRepository paradaRepository;

    public Page<Parada> listAll(Pageable pageable) {
        return paradaRepository.findAll(pageable);
    }

    public Parada findByIdOrThrowBadRequestException(Long id) {
        return paradaRepository.findById(id)
                .orElseThrow(()-> new BadRequestException("Parada not found"));
    }

    public List<Parada> findByName(String name) {
        List<Parada> paradas = paradaRepository.findByName(name);
        if(paradas.isEmpty()){
            throw new NotFoundException("Linha not found");
        }
        return paradas;
    }

    @Transactional
    public Parada save(ParadaPostRequestBody paradaPostRequestBody) {
        return paradaRepository.save(Parada.builder()
                .name(paradaPostRequestBody.getName())
                .latitude(paradaPostRequestBody.getLatitude())
                .longitude(paradaPostRequestBody.getLongitude())
                .build());
    }

    public void delete(Long id) {
        paradaRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    public void replace(ParadaPutRequestBody paradaPutRequestBody){
        Parada paradaSave = findByIdOrThrowBadRequestException(paradaPutRequestBody.getId());

        Parada parada = Parada.builder()
                .id(paradaSave.getId())
                .name(paradaPutRequestBody.getName())
                .build();

        paradaRepository.save(parada);
    }

}
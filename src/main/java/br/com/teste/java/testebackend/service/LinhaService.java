package br.com.teste.java.testebackend.service;

import br.com.teste.java.testebackend.domain.Linha;
import br.com.teste.java.testebackend.domain.Veiculo;
import br.com.teste.java.testebackend.exceptions.BadRequestException;
import br.com.teste.java.testebackend.repository.LinhaRepository;
import br.com.teste.java.testebackend.requests.LinhaPostRequestBody;
import br.com.teste.java.testebackend.requests.LinhaPutRequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LinhaService {

    private final LinhaRepository linhaRepository;

    public Page<Linha> listAll(Pageable pageable) {
        return linhaRepository.findAll(pageable);
    }

    public Linha findByIdOrThrowBadRequestException(Long id) {
        Optional<Linha> linha = linhaRepository.findById(id);

        linhaRepository.findById(id)
                .orElseThrow(()-> new BadRequestException("Linha not found"));
        return linha.orElseThrow();
    }

    public List<Linha> findByParada(long id) {
        List<Long> linhasId = linhaRepository.findByParadas_Id(id);

        List<Linha> linhas = new ArrayList();

        for (long ids: linhasId) {
            linhas.add(findByIdOrThrowBadRequestException(ids));
        }

        return (linhas.isEmpty()) ? null: linhas;
    }


    @Transactional
    public Linha save(LinhaPostRequestBody linhaPostRequestBody) {
        return linhaRepository.save(Linha.builder()
                .longitude(linhaPostRequestBody.getLongitude())
                .latitude(linhaPostRequestBody.getLatitude())
                .name(linhaPostRequestBody.getName()).build());
    }

    public void delete(Long id) {
        linhaRepository.delete(findByIdOrThrowBadRequestException(id));
    }

    public void replace(LinhaPutRequestBody linhaPutRequestBody){
        Linha linhaSave = findByIdOrThrowBadRequestException(linhaPutRequestBody.getId());

        Linha linha = Linha.builder()
                .id(linhaSave.getId())
                .name(linhaPutRequestBody.getName())
                .build();

        linhaRepository.save(linha);
    }
}
package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.Line;
import br.com.teste.java.testebackend.util.LinhaCreator;
import lombok.extern.log4j.Log4j2;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;
import java.util.Optional;

@DataJpaTest
@DisplayName("Tests for repository")
@Log4j2
class LineRepositoryTest {

    @Autowired
    private LineRepository lineRepository;

    @Test
    @DisplayName("Save create line when Successful")
    void save_PersistLinha_WhenSuccessful(){
        Line createLineToBeSaved = LinhaCreator.createLinhaToBeSaved();

        Line lineSaved = this.lineRepository.save(createLineToBeSaved);

        Assertions.assertThat(lineSaved).isNotNull();

        Assertions.assertThat(lineSaved.getId()).isNotNull();

        Assertions.assertThat(lineSaved.getName()).isEqualTo(createLineToBeSaved.getName());
    }

    @Test
    @DisplayName("Save uptaded line when Successful")
    void save_UpdatesLinha_WhenSuccessful(){
        Line createLineToBeSaved = LinhaCreator.createUpdatedLinha();

        Line lineSaved = this.lineRepository.save(createLineToBeSaved);

        lineSaved.setName("0.132. Park Way / Vargem Bonita - Rodoviária do Plano Piloto / via W3 Sul.\n");

        Line lineUpdated = this.lineRepository.save(lineSaved);

        Assertions.assertThat(lineUpdated).isNotNull();

        Assertions.assertThat(lineUpdated.getId()).isNotNull();

        Assertions.assertThat(lineUpdated.getName()).isEqualTo(lineSaved.getName());

    }

    @Test
    @DisplayName("Delete removes line when Successful")
    void delete_RemovesLinha_WhenSuccessful(){
        Line createLineToBeSaved = LinhaCreator.createLinhaToBeSaved();

        Line lineSaved = this.lineRepository.save(createLineToBeSaved);

       this.lineRepository.delete(lineSaved);

        Optional<Line> linhaOptional = this.lineRepository.findById(lineSaved.getId());

        Assertions.assertThat(linhaOptional).isEmpty();
    }

    @Test
    @DisplayName("Find by parada returns list of lines when Successful")
    void findByParada_ReturnsLinha_WhenSuccessful(){
        Line createLineToBeSaved = LinhaCreator.createLinhaToBeSaved();

        Line lineSaved = this.lineRepository.save(createLineToBeSaved);

        Long id = lineSaved.getId();

        List<Long> linhas = this.lineRepository.findByStopsId(id);

        Assertions.assertThat(linhas).isNotNull();
    }

}
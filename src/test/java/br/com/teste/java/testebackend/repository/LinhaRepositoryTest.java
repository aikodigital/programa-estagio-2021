package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.Linha;
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
class LinhaRepositoryTest {

    @Autowired
    private LinhaRepository linhaRepository;

    @Test
    @DisplayName("Save create linha when Successful")
    void save_PersistLinha_WhenSuccessful(){
        Linha createLinhaToBeSaved = LinhaCreator.createLinhaToBeSaved();

        Linha linhaSaved = this.linhaRepository.save(createLinhaToBeSaved);

        Assertions.assertThat(linhaSaved).isNotNull();

        Assertions.assertThat(linhaSaved.getId()).isNotNull();

        Assertions.assertThat(linhaSaved.getName()).isEqualTo(createLinhaToBeSaved.getName());
    }

    @Test
    @DisplayName("Save uptaded linha when Successful")
    void save_UpdatesLinha_WhenSuccessful(){
        Linha createLinhaToBeSaved = LinhaCreator.createUpdatedLinha();

        Linha linhaSaved = this.linhaRepository.save(createLinhaToBeSaved);

        linhaSaved.setName("0.132. Park Way / Vargem Bonita - Rodoviária do Plano Piloto / via W3 Sul.\n");

        Linha linhaUpdated = this.linhaRepository.save(linhaSaved);

        Assertions.assertThat(linhaUpdated).isNotNull();

        Assertions.assertThat(linhaUpdated.getId()).isNotNull();

        Assertions.assertThat(linhaUpdated.getName()).isEqualTo(linhaSaved.getName());

    }

    @Test
    @DisplayName("Delete removes linha when Successful")
    void delete_RemovesLinha_WhenSuccessful(){
        Linha createLinhaToBeSaved = LinhaCreator.createLinhaToBeSaved();

        Linha linhaSaved = this.linhaRepository.save(createLinhaToBeSaved);

       this.linhaRepository.delete(linhaSaved);

        Optional<Linha> linhaOptional = this.linhaRepository.findById(linhaSaved.getId());

        Assertions.assertThat(linhaOptional).isEmpty();
    }

    @Test
    @DisplayName("Find by parada returns list of linhas when Successful")
    void findByParada_ReturnsLinha_WhenSuccessful(){
        Linha createLinhaToBeSaved = LinhaCreator.createLinhaToBeSaved();

        Linha linhaSaved = this.linhaRepository.save(createLinhaToBeSaved);

        Long id = linhaSaved.getId();

        List<Long> linhas = this.linhaRepository.findByParadas_Id(id);

        Assertions.assertThat(linhas).isNotNull();
    }

}
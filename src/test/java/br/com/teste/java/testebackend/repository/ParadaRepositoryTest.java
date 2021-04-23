package br.com.teste.java.testebackend.repository;


import br.com.teste.java.testebackend.domain.Parada;
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
class ParadaRepositoryTest {

    @Autowired
    ParadaRepository paradaRepository;

    @Test
    @DisplayName("Save LinhaCreator.LinhaToBeSaved parada when Successful")
    void save_PersistParada_WhenSuccessful(){
        Parada paradaToBeSaved = createParada();

        Parada paradaSaved = this.paradaRepository.save(paradaToBeSaved);

        Assertions.assertThat(paradaSaved).isNotNull();

        Assertions.assertThat(paradaSaved.getId()).isNotNull();

        Assertions.assertThat(paradaSaved.getName()).isEqualTo(paradaToBeSaved.getName());
    }

    @Test
    @DisplayName("Uptaded parada when Successful")
    void save_UpdatesParada_WhenSuccessful(){
        Parada paradaToBeSaved = createParada();

        Parada paradaSaved = this.paradaRepository.save(paradaToBeSaved);

        paradaSaved.setName(" parada 212 Norte\n");

        Parada paradaUpdated = this.paradaRepository.save(paradaSaved);

        Assertions.assertThat(paradaUpdated).isNotNull();

        Assertions.assertThat(paradaUpdated.getId()).isNotNull();

        Assertions.assertThat(paradaUpdated.getName()).isEqualTo(paradaSaved.getName());

    }

    @Test
    @DisplayName("Delete removes parada when Successful")
    void delete_RemovesParada_WhenSuccessful(){
        Parada paradaToBeSaved = createParada();

        Parada paradaSaved = this.paradaRepository.save(paradaToBeSaved);

        this.paradaRepository.delete(paradaSaved);

        Optional<Parada> paradaOptional = this.paradaRepository.findById(paradaSaved.getId());

        Assertions.assertThat(paradaOptional).isEmpty();
    }

    @Test
    @DisplayName("Find by name returns list of parada when Successful")
    void findByName_ReturnsParada_WhenSuccessful(){
        Parada paradaToBeSaved = createParada();

        Parada paradaSaved = this.paradaRepository.save(paradaToBeSaved);

        String name = paradaSaved.getName();

        List<Parada> paradas = this.paradaRepository.findByName(name);

        Assertions.assertThat(paradas).isNotEmpty();

        Assertions.assertThat(paradas).contains(paradaSaved);
    }

    @Test
    @DisplayName("Find by name returns empty list when no parada is found")
    void findByName_ReturnsEmptyParada_ParadaNotFound(){

        List<Parada> paradas = this.paradaRepository.findByName("parada 216 Norte");

        Assertions.assertThat(paradas).isEmpty();
    }

    private Parada createParada(){
        return Parada.builder()
                .name("parada 216 Norte\n")
                .longitude(122.131360590650)
                .latitude(130.391007543376)
                .build();
    }
}
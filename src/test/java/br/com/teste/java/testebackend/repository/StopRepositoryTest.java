package br.com.teste.java.testebackend.repository;


import br.com.teste.java.testebackend.domain.Stop;
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
class StopRepositoryTest {

    @Autowired
    StopRepository stopRepository;

    @Test
    @DisplayName("Save LinhaCreator.LinhaToBeSaved parada when Successful")
    void save_PersistParada_WhenSuccessful(){
        Stop stopToBeSaved = createParada();

        Stop stopSaved = this.stopRepository.save(stopToBeSaved);

        Assertions.assertThat(stopSaved).isNotNull();

        Assertions.assertThat(stopSaved.getId()).isNotNull();

        Assertions.assertThat(stopSaved.getName()).isEqualTo(stopToBeSaved.getName());
    }

    @Test
    @DisplayName("Uptaded parada when Successful")
    void save_UpdatesParada_WhenSuccessful(){
        Stop stopToBeSaved = createParada();

        Stop stopSaved = this.stopRepository.save(stopToBeSaved);

        stopSaved.setName(" parada 212 Norte\n");

        Stop stopUpdated = this.stopRepository.save(stopSaved);

        Assertions.assertThat(stopUpdated).isNotNull();

        Assertions.assertThat(stopUpdated.getId()).isNotNull();

        Assertions.assertThat(stopUpdated.getName()).isEqualTo(stopSaved.getName());

    }

    @Test
    @DisplayName("Delete removes parada when Successful")
    void delete_RemovesParada_WhenSuccessful(){
        Stop stopToBeSaved = createParada();

        Stop stopSaved = this.stopRepository.save(stopToBeSaved);

        this.stopRepository.delete(stopSaved);

        Optional<Stop> paradaOptional = this.stopRepository.findById(stopSaved.getId());

        Assertions.assertThat(paradaOptional).isEmpty();
    }

    @Test
    @DisplayName("Find by name returns list of parada when Successful")
    void findByName_ReturnsParada_WhenSuccessful(){
        Stop stopToBeSaved = createParada();

        Stop stopSaved = this.stopRepository.save(stopToBeSaved);

        String name = stopSaved.getName();

        List<Stop> stops = this.stopRepository.findByName(name);

        Assertions.assertThat(stops).isNotEmpty();

        Assertions.assertThat(stops).contains(stopSaved);
    }

    @Test
    @DisplayName("Find by name returns empty list when no parada is found")
    void findByName_ReturnsEmptyParada_ParadaNotFound(){

        List<Stop> stops = this.stopRepository.findByName("parada 216 Norte");

        Assertions.assertThat(stops).isEmpty();
    }

    private Stop createParada(){
        return Stop.builder()
                .name("parada 216 Norte\n")
                .longitude(122.131360590650)
                .latitude(130.391007543376)
                .build();
    }
}
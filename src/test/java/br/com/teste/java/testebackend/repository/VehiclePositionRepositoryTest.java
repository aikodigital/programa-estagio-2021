package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.VehiclePosition;
import lombok.extern.log4j.Log4j2;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

@DataJpaTest
@DisplayName("Tests for repository")
@Log4j2
class VehiclePositionRepositoryTest {

    @Autowired
    private VehiclePositionRepository vehiclePositionRepository;

    @Test
    @DisplayName("Save LinhaCreator.LinhaToBeSavede posicaoVeiculo when Successful")
    void save_PersistPosicaoVeiculo_WhenSuccessful(){
        VehiclePosition vehiclePositionToBeSaved = createPosicaoVeiculo();

        VehiclePosition vehiclePositionSaved = this.vehiclePositionRepository.save(vehiclePositionToBeSaved);

        Assertions.assertThat(vehiclePositionSaved).isNotNull();

        Assertions.assertThat(vehiclePositionSaved.getId()).isNotNull();

        Assertions.assertThat(vehiclePositionSaved.getLatitude()).isEqualTo(vehiclePositionSaved.getLatitude());
    }

    @Test
    @DisplayName("Save uptaded posicaoVeiculo when Successful")
    void save_UpdatesPosicaoVeiculo_WhenSuccessful(){
        VehiclePosition vehiclePositionToBeSaved = createPosicaoVeiculo();

        VehiclePosition vehiclePositionSaved = this.vehiclePositionRepository.save(vehiclePositionToBeSaved);

        vehiclePositionSaved.setLatitude(12.10);

        VehiclePosition vehiclePositionUpdated = this.vehiclePositionRepository.save(vehiclePositionSaved);

        Assertions.assertThat(vehiclePositionSaved).isNotNull();

        Assertions.assertThat(vehiclePositionSaved.getId()).isNotNull();

        Assertions.assertThat(vehiclePositionUpdated.getLatitude()).isEqualTo(vehiclePositionSaved.getLatitude());

    }

    @Test
    @DisplayName("Delete removes posicaoVeiculo when Successful")
    void delete_RemovesPosicaoVeiculo_WhenSuccessful(){
        VehiclePosition vehiclePositionToBeSaved = createPosicaoVeiculo();

        VehiclePosition vehiclePositionSaved = this.vehiclePositionRepository.save(vehiclePositionToBeSaved);

        this.vehiclePositionRepository.delete(vehiclePositionSaved);

        Optional<VehiclePosition> posicaoVeiculoOptional = this.vehiclePositionRepository.findById(vehiclePositionSaved.getId());

        Assertions.assertThat(posicaoVeiculoOptional).isEmpty();
    }

    @Test
    @DisplayName("Find by Id returns list of posicaoVeiculo when Successful")
    void findById_ReturnsPosicaoVeiculo_WhenSuccessful(){
        VehiclePosition posicaoveiculoToBeSaved = createPosicaoVeiculo();

        VehiclePosition vehiclePositionSaved = this.vehiclePositionRepository.save(posicaoveiculoToBeSaved);

        Long id = vehiclePositionSaved.getId();

        Optional<VehiclePosition> posicaoVeiculo = this.vehiclePositionRepository.findById(id);

        Assertions.assertThat(posicaoVeiculo).isNotEmpty();

        Assertions.assertThat(posicaoVeiculo).contains(vehiclePositionSaved);
    }

    private VehiclePosition createPosicaoVeiculo(){
        return VehiclePosition.builder()
                .latitude(122.131360590650)
                .longitude(130.39100754337)
                .build();

    }
}
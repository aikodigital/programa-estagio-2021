package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.Vehicle;
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
public class VehicleRepositoryTest {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Test
    @DisplayName("Save create veiculo when Successful")
    void save_PersistVeiculo_WhenSuccessful(){
        Vehicle vehicleToBeSaved = createVeiculo();

        Vehicle vehicleSaved = this.vehicleRepository.save(vehicleToBeSaved);

        Assertions.assertThat(vehicleSaved).isNotNull();

        Assertions.assertThat(vehicleSaved.getId()).isNotNull();

        Assertions.assertThat(vehicleSaved.getName()).isEqualTo(vehicleToBeSaved.getName());
    }

    @Test
    @DisplayName("Save create veiculo when Successful")
    void save_UpdatesVeiculo_WhenSuccessful(){
        Vehicle vehicleToBeSaved = createVeiculo();

        Vehicle vehicleSaved = this.vehicleRepository.save(vehicleToBeSaved);

        vehicleSaved.setName("ônibus OF 1722\n");

        Vehicle vehicleUpdated = this.vehicleRepository.save(vehicleSaved);

        Assertions.assertThat(vehicleUpdated).isNotNull();

        Assertions.assertThat(vehicleUpdated.getId()).isNotNull();

        Assertions.assertThat(vehicleUpdated.getName()).isEqualTo(vehicleSaved.getName());

    }

    @Test
    @DisplayName("Delete removes veiculo when Successful")
    void delete_RemovesVeiculo_WhenSuccessful(){
        Vehicle vehicleToBeSaved = createVeiculo();

        Vehicle vehicleSaved = this.vehicleRepository.save(vehicleToBeSaved);

        this.vehicleRepository.delete(vehicleSaved);

        Optional<Vehicle> paradaOptional = this.vehicleRepository.findById(vehicleSaved.getId());

        Assertions.assertThat(paradaOptional).isEmpty();
    }


    @Test
    @DisplayName("Find by parada returns list of veiculos when Successful")
    void findByParada_ReturnsVeiculos_WhenSuccessful(){
        Vehicle vehicleToBeSaved = createVeiculo();

        Vehicle vehicleSaved = this.vehicleRepository.save(vehicleToBeSaved);

        Long id = vehicleSaved.getId();

        List<Long> vehiclesId = this.vehicleRepository.findByLineId(id);

        Assertions.assertThat(vehiclesId).isNotNull();
    }

    private Vehicle createVeiculo(){
        return Vehicle.builder()
                .name("ônibus OF 1721\n")
                .model("Mercedez")
                .build();
    }
}
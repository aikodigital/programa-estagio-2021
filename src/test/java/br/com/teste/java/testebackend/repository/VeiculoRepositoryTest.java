package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.Veiculo;
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
public class VeiculoRepositoryTest {

    @Autowired
    private VeiculoRepository veiculoRepository;

    @Test
    @DisplayName("Save create veiculo when Successful")
    void save_PersistVeiculo_WhenSuccessful(){
        Veiculo veiculoToBeSaved = createVeiculo();

        Veiculo veiculoSaved = this.veiculoRepository.save(veiculoToBeSaved);

        Assertions.assertThat(veiculoSaved).isNotNull();

        Assertions.assertThat(veiculoSaved.getId()).isNotNull();

        Assertions.assertThat(veiculoSaved.getName()).isEqualTo(veiculoToBeSaved.getName());
    }

    @Test
    @DisplayName("Save create veiculo when Successful")
    void save_UpdatesVeiculo_WhenSuccessful(){
        Veiculo veiculoToBeSaved = createVeiculo();

        Veiculo veiculoSaved = this.veiculoRepository.save(veiculoToBeSaved);

        veiculoSaved.setName("ônibus OF 1722\n");

        Veiculo veiculoUpdated = this.veiculoRepository.save(veiculoSaved);

        Assertions.assertThat(veiculoUpdated).isNotNull();

        Assertions.assertThat(veiculoUpdated.getId()).isNotNull();

        Assertions.assertThat(veiculoUpdated.getName()).isEqualTo(veiculoSaved.getName());

    }

    @Test
    @DisplayName("Delete removes veiculo when Successful")
    void delete_RemovesVeiculo_WhenSuccessful(){
        Veiculo veiculoToBeSaved = createVeiculo();

        Veiculo veiculoSaved = this.veiculoRepository.save(veiculoToBeSaved);

        this.veiculoRepository.delete(veiculoSaved);

        Optional<Veiculo> paradaOptional = this.veiculoRepository.findById(veiculoSaved.getId());

        Assertions.assertThat(paradaOptional).isEmpty();
    }


    @Test
    @DisplayName("Find by parada returns list of veiculos when Successful")
    void findByParada_ReturnsVeiculos_WhenSuccessful(){
        Veiculo veiculoToBeSaved = createVeiculo();

        Veiculo veiculoSaved = this.veiculoRepository.save(veiculoToBeSaved);

        Long id = veiculoSaved.getId();

        List<Long> veiculosId = this.veiculoRepository.findByLinha_Id(id);

        Assertions.assertThat(veiculosId).isNotNull();
    }

    private Veiculo createVeiculo(){
        return Veiculo.builder()
                .name("ônibus OF 1721\n")
                .modelo("Mercedez")
                .build();
    }
}
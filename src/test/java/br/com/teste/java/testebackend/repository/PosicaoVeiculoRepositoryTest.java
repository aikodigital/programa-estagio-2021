package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.PosicaoVeiculo;
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
class PosicaoVeiculoRepositoryTest {

    @Autowired
    private PosicaoVeiculoRepository posicaoVeiculoRepository;

    @Test
    @DisplayName("Save LinhaCreator.LinhaToBeSavede posicaoVeiculo when Successful")
    void save_PersistPosicaoVeiculo_WhenSuccessful(){
        PosicaoVeiculo posicaoVeiculoToBeSaved = createPosicaoVeiculo();

        PosicaoVeiculo posicaoVeiculoSaved = this.posicaoVeiculoRepository.save(posicaoVeiculoToBeSaved);

        Assertions.assertThat(posicaoVeiculoSaved).isNotNull();

        Assertions.assertThat(posicaoVeiculoSaved.getId()).isNotNull();

        Assertions.assertThat(posicaoVeiculoSaved.getLatitude()).isEqualTo(posicaoVeiculoSaved.getLatitude());
    }

    @Test
    @DisplayName("Save uptaded posicaoVeiculo when Successful")
    void save_UpdatesPosicaoVeiculo_WhenSuccessful(){
        PosicaoVeiculo posicaoVeiculoToBeSaved = createPosicaoVeiculo();

        PosicaoVeiculo posicaoVeiculoSaved = this.posicaoVeiculoRepository.save(posicaoVeiculoToBeSaved);

        posicaoVeiculoSaved.setLatitude(12.10);

        PosicaoVeiculo posicaoVeiculoUpdated = this.posicaoVeiculoRepository.save(posicaoVeiculoSaved);

        Assertions.assertThat(posicaoVeiculoSaved).isNotNull();

        Assertions.assertThat(posicaoVeiculoSaved.getId()).isNotNull();

        Assertions.assertThat(posicaoVeiculoUpdated.getLatitude()).isEqualTo(posicaoVeiculoSaved.getLatitude());

    }

    @Test
    @DisplayName("Delete removes posicaoVeiculo when Successful")
    void delete_RemovesPosicaoVeiculo_WhenSuccessful(){
        PosicaoVeiculo posicaoVeiculoToBeSaved = createPosicaoVeiculo();

        PosicaoVeiculo posicaoVeiculoSaved = this.posicaoVeiculoRepository.save(posicaoVeiculoToBeSaved);

        this.posicaoVeiculoRepository.delete(posicaoVeiculoSaved);

        Optional<PosicaoVeiculo> posicaoVeiculoOptional = this.posicaoVeiculoRepository.findById(posicaoVeiculoSaved.getId());

        Assertions.assertThat(posicaoVeiculoOptional).isEmpty();
    }

    @Test
    @DisplayName("Find by Id returns list of posicaoVeiculo when Successful")
    void findById_ReturnsPosicaoVeiculo_WhenSuccessful(){
        PosicaoVeiculo posicaoveiculoToBeSaved = createPosicaoVeiculo();

        PosicaoVeiculo posicaoVeiculoSaved = this.posicaoVeiculoRepository.save(posicaoveiculoToBeSaved);

        Long id = posicaoVeiculoSaved.getId();

        Optional<PosicaoVeiculo> posicaoVeiculo = this.posicaoVeiculoRepository.findById(id);

        Assertions.assertThat(posicaoVeiculo).isNotEmpty();

        Assertions.assertThat(posicaoVeiculo).contains(posicaoVeiculoSaved);
    }

    private PosicaoVeiculo createPosicaoVeiculo(){
        return PosicaoVeiculo.builder()
                .latitude(122.131360590650)
                .longitude(130.39100754337)
                .build();

    }
}
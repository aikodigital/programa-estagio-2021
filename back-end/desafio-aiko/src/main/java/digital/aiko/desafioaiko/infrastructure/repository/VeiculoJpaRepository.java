package digital.aiko.desafioaiko.infrastructure.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.aiko.desafioaiko.infrastructure.entity.VeiculoJpa;

public interface VeiculoJpaRepository extends JpaRepository<VeiculoJpa, Long> {
	
	List<VeiculoJpa> findByLinhaId(Long idLinha);

}

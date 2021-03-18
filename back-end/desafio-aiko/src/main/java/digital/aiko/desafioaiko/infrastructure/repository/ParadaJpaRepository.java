package digital.aiko.desafioaiko.infrastructure.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.aiko.desafioaiko.infrastructure.entity.ParadaJpa;

public interface ParadaJpaRepository extends JpaRepository<ParadaJpa, Long> {
	
}

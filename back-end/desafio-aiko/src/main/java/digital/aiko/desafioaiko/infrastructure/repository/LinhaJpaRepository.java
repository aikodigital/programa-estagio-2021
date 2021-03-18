package digital.aiko.desafioaiko.infrastructure.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import digital.aiko.desafioaiko.infrastructure.entity.LinhaJpa;

public interface LinhaJpaRepository extends JpaRepository<LinhaJpa, Long> {
	
	public List<LinhaJpa> findByParadasId(Long idParada);

}

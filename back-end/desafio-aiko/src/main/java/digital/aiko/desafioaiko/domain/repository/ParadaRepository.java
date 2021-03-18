package digital.aiko.desafioaiko.domain.repository;

import java.util.List;

import digital.aiko.desafioaiko.domain.model.Parada;

public interface ParadaRepository extends CrudRepository<Parada, Long> {

	List<Parada> listarPelaProximidade(Double latitude, Double longitude);
	
}

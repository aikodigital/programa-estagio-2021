package digital.aiko.desafioaiko.domain.service;

import java.util.List;

import digital.aiko.desafioaiko.domain.model.Parada;

public interface ParadaService extends Service<Parada, Long> {
	
	List<Parada> listarPelaProximidade(Double latitude, Double longitude);

}

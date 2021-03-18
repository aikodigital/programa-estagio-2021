package digital.aiko.desafioaiko.domain.service;

import java.util.List;

import digital.aiko.desafioaiko.domain.model.Veiculo;

public interface VeiculoService extends Service<Veiculo, Long> {
	
	List<Veiculo> filtrarPelaLinha(Long idLinha);

}

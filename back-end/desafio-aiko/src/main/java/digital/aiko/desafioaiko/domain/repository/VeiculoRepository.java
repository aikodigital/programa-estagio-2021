package digital.aiko.desafioaiko.domain.repository;

import java.util.List;

import digital.aiko.desafioaiko.domain.model.Veiculo;

public interface VeiculoRepository extends CrudRepository<Veiculo, Long> {
	
	List<Veiculo> filtrarPelaLinha(Long idLinha);

}

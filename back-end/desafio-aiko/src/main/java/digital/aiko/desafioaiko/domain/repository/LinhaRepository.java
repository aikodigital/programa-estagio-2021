package digital.aiko.desafioaiko.domain.repository;

import java.util.List;

import digital.aiko.desafioaiko.domain.model.Linha;

public interface LinhaRepository extends CrudRepository<Linha, Long> {
	
	List<Linha> filtrarPelaParada(Long idParada);

}

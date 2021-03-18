package digital.aiko.desafioaiko.domain.service;

import java.util.List;

import digital.aiko.desafioaiko.domain.model.Linha;

public interface LinhaService extends Service<Linha, Long> {
	
	void associarParada(Long idLinha, Long idParada);
	
	void desassociarParada(Long idLinha, Long idParada);
	
	List<Linha> filtrarPelaParada(Long idParada);

}

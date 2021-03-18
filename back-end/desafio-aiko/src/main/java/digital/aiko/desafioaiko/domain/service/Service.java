package digital.aiko.desafioaiko.domain.service;

import java.util.List;

public interface Service<T, ID> {

	T salvar(T t);
	
	void remover(ID id);
	
	T buscarOuFalhar(ID id);
	
	List<T> listar();
	
}

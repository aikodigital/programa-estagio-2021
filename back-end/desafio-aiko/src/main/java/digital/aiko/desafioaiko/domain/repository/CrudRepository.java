package digital.aiko.desafioaiko.domain.repository;

import java.util.List;
import java.util.Optional;

public interface CrudRepository <T, ID> {
	
	T save(T entity);

	void deleteById(ID id);
	
	List<T> findAll();
	
	Optional<T> findById(ID id);
	
	void flush();

}

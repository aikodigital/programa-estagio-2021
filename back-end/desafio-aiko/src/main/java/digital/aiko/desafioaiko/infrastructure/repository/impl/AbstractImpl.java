package digital.aiko.desafioaiko.infrastructure.repository.impl;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import digital.aiko.desafioaiko.domain.model.DomainModel;
import digital.aiko.desafioaiko.infrastructure.assembler.DomainAssembler;
import digital.aiko.desafioaiko.infrastructure.assembler.DomainDissambler;
import digital.aiko.desafioaiko.infrastructure.entity.JpaEntity;

public class AbstractImpl<D extends DomainModel, P extends JpaEntity, R extends JpaRepository<P, ID>, ID> {
	
	@Autowired
	protected R repository;
	
	@Autowired
	protected DomainAssembler<D, P> domainAssembler;
	
	@Autowired
	protected DomainDissambler<D, P> domainDissambler;
	
	@PersistenceContext
	protected EntityManager entityManager;
	
	protected Class<D> clazzD;
	
	protected Class<P> clazzP;
	
	public AbstractImpl(Class<D> clazzD, Class<P> clazzP) {
		this.clazzD = clazzD;
		this.clazzP = clazzP;
	}

	public D save(D model) {
		P entidade = domainDissambler.toJpa(model, clazzP);
		entidade = entityManager.merge(entidade);
		
		return domainAssembler.toDomain(entidade, clazzD);
	}

	public void deleteById(ID id) {
		repository.deleteById(id);
	}

	public List<D> findAll() {
		return domainAssembler.toListDomain(repository.findAll(), clazzD);
	}

	public Optional<D> findById(ID id) {
		Optional<P> entidadeOptional = repository.findById(id);
		
		D model = null;
		
		if (entidadeOptional.isPresent()) {
			model = domainAssembler.toDomain(entidadeOptional.get(), clazzD);
		}
		
		return Optional.ofNullable(model);
	}

	public void flush() {
		repository.flush();
	}
	
}

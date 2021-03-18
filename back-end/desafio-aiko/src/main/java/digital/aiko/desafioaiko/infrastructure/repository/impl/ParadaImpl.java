package digital.aiko.desafioaiko.infrastructure.repository.impl;

import java.util.List;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Service;

import digital.aiko.desafioaiko.domain.model.Parada;
import digital.aiko.desafioaiko.domain.repository.ParadaRepository;
import digital.aiko.desafioaiko.infrastructure.entity.ParadaJpa;
import digital.aiko.desafioaiko.infrastructure.repository.ParadaJpaRepository;

@Service
public class ParadaImpl extends AbstractImpl<Parada, ParadaJpa, ParadaJpaRepository, Long> implements ParadaRepository {

	public ParadaImpl() {
		super(Parada.class, ParadaJpa.class);
	}

	/*
	 * Fórmula de Haversine
	 * https://pt.wikipedia.org/wiki/F%C3%B3rmula_de_Haversine#Formula%C3%A7%C3%A3o
	 */
	@Override
	public List<Parada> listarPelaProximidade(Double latitude, Double longitude) {
		String formulaHaversine = "2*asin"
				+ "(sqrt(power(((radians(latitude)-radians(:latitude))/2), 2)+"
				+ "cos(radians(latitude))*"
				+ "cos(radians(:latitude))*"
				+ "power(((radians(longitude)-radians(:longitude))/2), 2)))";
		String sql = String.format("SELECT pd FROM parada AS pd ORDER BY %s", formulaHaversine);
		
		TypedQuery<ParadaJpa> query = entityManager.createQuery(sql, clazzP);
		query.setParameter("latitude", latitude);
		query.setParameter("longitude", longitude);
		
		return domainAssembler.toListDomain(query.getResultList(), clazzD);
	}
	
}

package digital.aiko.desafioaiko.infrastructure.repository.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import digital.aiko.desafioaiko.domain.model.Veiculo;
import digital.aiko.desafioaiko.domain.repository.VeiculoRepository;
import digital.aiko.desafioaiko.infrastructure.entity.VeiculoJpa;
import digital.aiko.desafioaiko.infrastructure.repository.VeiculoJpaRepository;

@Service
public class VeiculoImpl extends AbstractImpl<Veiculo, VeiculoJpa, VeiculoJpaRepository, Long> implements VeiculoRepository {

	public VeiculoImpl() {
		super(Veiculo.class, VeiculoJpa.class);
	}

	@Override
	public List<Veiculo> filtrarPelaLinha(Long idLinha) {
		return domainAssembler.toListDomain(repository.findByLinhaId(idLinha), clazzD);
	}

}

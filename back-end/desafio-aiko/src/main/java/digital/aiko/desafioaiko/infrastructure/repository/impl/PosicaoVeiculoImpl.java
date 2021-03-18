package digital.aiko.desafioaiko.infrastructure.repository.impl;

import org.springframework.stereotype.Service;

import digital.aiko.desafioaiko.domain.model.PosicaoVeiculo;
import digital.aiko.desafioaiko.domain.repository.PosicaoVeiculoRepository;
import digital.aiko.desafioaiko.infrastructure.entity.PosicaoVeiculoJpa;
import digital.aiko.desafioaiko.infrastructure.repository.PosicaoVeiculoJpaRepository;

@Service
public class PosicaoVeiculoImpl extends AbstractImpl<PosicaoVeiculo, PosicaoVeiculoJpa, PosicaoVeiculoJpaRepository, Long> implements PosicaoVeiculoRepository {

	public PosicaoVeiculoImpl() {
		super(PosicaoVeiculo.class, PosicaoVeiculoJpa.class);
	}

}

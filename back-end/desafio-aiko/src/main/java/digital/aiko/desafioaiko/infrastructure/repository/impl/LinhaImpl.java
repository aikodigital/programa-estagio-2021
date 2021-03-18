package digital.aiko.desafioaiko.infrastructure.repository.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import digital.aiko.desafioaiko.domain.model.Linha;
import digital.aiko.desafioaiko.domain.repository.LinhaRepository;
import digital.aiko.desafioaiko.infrastructure.entity.LinhaJpa;
import digital.aiko.desafioaiko.infrastructure.repository.LinhaJpaRepository;

@Service
public class LinhaImpl extends AbstractImpl<Linha, LinhaJpa, LinhaJpaRepository, Long> implements LinhaRepository {

	public LinhaImpl() {
		super(Linha.class, LinhaJpa.class);
	}

	@Override
	public List<Linha> filtrarPelaParada(Long idParada) {
		return domainAssembler.toListDomain(repository.findByParadasId(idParada), clazzD);
	}


}

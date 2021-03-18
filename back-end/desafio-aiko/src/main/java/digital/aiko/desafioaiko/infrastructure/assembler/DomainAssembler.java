package digital.aiko.desafioaiko.infrastructure.assembler;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import digital.aiko.desafioaiko.domain.model.DomainModel;
import digital.aiko.desafioaiko.infrastructure.entity.JpaEntity;

@Component
public class DomainAssembler<D extends DomainModel, P extends JpaEntity> {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public D toDomain(P parada, Class<D> clazzD) {
		return modelMapper.map(parada, clazzD);
	}
	
	public List<D> toListDomain(List<P> paradas, Class<D> clazzD) {
		return paradas.stream().map(linha -> toDomain(linha, clazzD)).collect(Collectors.toList());
	}

}

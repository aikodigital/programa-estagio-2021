package digital.aiko.desafioaiko.infrastructure.assembler;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import digital.aiko.desafioaiko.domain.model.DomainModel;
import digital.aiko.desafioaiko.infrastructure.entity.JpaEntity;

@Component
public class DomainDissambler<D extends DomainModel, P extends JpaEntity> {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public P toJpa(D parada, Class<P> clazzP) {
		return modelMapper.map(parada, clazzP);
	}

}

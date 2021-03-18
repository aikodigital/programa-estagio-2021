package digital.aiko.desafioaiko.api.v1.assembler;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import digital.aiko.desafioaiko.api.v1.dto.input.ParadaInput;
import digital.aiko.desafioaiko.domain.model.Parada;

@Component
public class ParadaInputDissambler {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public Parada toDomainObject(ParadaInput paradaInput) {
		return modelMapper.map(paradaInput, Parada.class);
	}
	
	public void copyToDomainObject(ParadaInput paradaInput, Parada parada) {
		modelMapper.map(paradaInput, parada);
	}

}

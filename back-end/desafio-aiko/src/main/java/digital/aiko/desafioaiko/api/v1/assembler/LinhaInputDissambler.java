package digital.aiko.desafioaiko.api.v1.assembler;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import digital.aiko.desafioaiko.api.v1.dto.input.LinhaInput;
import digital.aiko.desafioaiko.domain.model.Linha;

@Component
public class LinhaInputDissambler {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public Linha toDomainObject(LinhaInput linhaInput) {
		return modelMapper.map(linhaInput, Linha.class);
	}
	
	public void copyToDomainObject(LinhaInput linhaInput, Linha linha) {
		modelMapper.map(linhaInput, linha);
	}

}

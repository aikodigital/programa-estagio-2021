package digital.aiko.desafioaiko.api.v1.assembler;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import digital.aiko.desafioaiko.api.v1.dto.output.ParadaOutput;
import digital.aiko.desafioaiko.domain.model.Parada;

@Component
public class ParadaOutputAssembler {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public ParadaOutput toOutput(Parada parada) {
		return modelMapper.map(parada, ParadaOutput.class);
	}
	
	public List<ParadaOutput> toListOutput(List<Parada> paradas) {
		return paradas.stream().map(parada -> toOutput(parada)).collect(Collectors.toList());
	}

}

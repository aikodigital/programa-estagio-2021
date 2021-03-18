package digital.aiko.desafioaiko.api.v1.assembler;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import digital.aiko.desafioaiko.api.v1.dto.input.VeiculoInput;
import digital.aiko.desafioaiko.domain.model.Veiculo;

@Component
public class VeiculoInputDissambler {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public Veiculo toDomainObject(VeiculoInput veiculoInput) {
		return modelMapper.map(veiculoInput, Veiculo.class);
	}
	
	public void copyToDomainObject(VeiculoInput veiculoInput, Veiculo veiculo) {
		veiculo.setLinha(null);
		modelMapper.map(veiculoInput, veiculo);
	}

}

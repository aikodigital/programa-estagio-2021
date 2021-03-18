package digital.aiko.desafioaiko.api.v1.assembler;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import digital.aiko.desafioaiko.api.v1.dto.input.PosicaoVeiculoInput;
import digital.aiko.desafioaiko.domain.model.PosicaoVeiculo;

@Component
public class PosicaoVeiculoInputDissambler {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public PosicaoVeiculo toDomainObject(PosicaoVeiculoInput posicaoVeiculoInput) {
		return modelMapper.map(posicaoVeiculoInput, PosicaoVeiculo.class);
	}
	
	public void copyToDomainObject(PosicaoVeiculoInput posicaoVeiculoInput, PosicaoVeiculo posicaoVeiculo) {
		modelMapper.map(posicaoVeiculoInput, posicaoVeiculo);
	}

}

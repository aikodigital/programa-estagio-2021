package digital.aiko.desafioaiko.api.v1.assembler;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import digital.aiko.desafioaiko.api.v1.dto.output.PosicaoVeiculoOutput;
import digital.aiko.desafioaiko.domain.model.PosicaoVeiculo;

@Component
public class PosicaoVeiculoOutputAssembler {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public PosicaoVeiculoOutput toOutput(PosicaoVeiculo posicaoVeiculo) {
		return modelMapper.map(posicaoVeiculo, PosicaoVeiculoOutput.class);
	}

	public List<PosicaoVeiculoOutput> toListOutput(List<PosicaoVeiculo> posicaoVeiculos) {
		return posicaoVeiculos.stream().map(posicaoVeiculo -> toOutput(posicaoVeiculo)).collect(Collectors.toList());
	}

}

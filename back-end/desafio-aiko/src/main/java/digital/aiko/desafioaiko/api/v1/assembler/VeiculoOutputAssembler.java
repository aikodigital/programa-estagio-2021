package digital.aiko.desafioaiko.api.v1.assembler;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import digital.aiko.desafioaiko.api.v1.dto.output.VeiculoOutput;
import digital.aiko.desafioaiko.domain.model.Veiculo;

@Component
public class VeiculoOutputAssembler {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public VeiculoOutput toOutput(Veiculo veiculo) {
		return modelMapper.map(veiculo, VeiculoOutput.class);
	}
	
	public List<VeiculoOutput> toListOutput(List<Veiculo> veiculos) {
		return veiculos.stream().map(veiculo -> toOutput(veiculo)).collect(Collectors.toList());
	}

}

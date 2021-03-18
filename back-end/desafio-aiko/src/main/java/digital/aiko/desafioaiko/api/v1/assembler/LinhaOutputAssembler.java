package digital.aiko.desafioaiko.api.v1.assembler;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import digital.aiko.desafioaiko.api.v1.dto.output.LinhaOutput;
import digital.aiko.desafioaiko.domain.model.Linha;

@Component
public class LinhaOutputAssembler {
	
	@Autowired
	private ModelMapper modelMapper;
	
	public LinhaOutput toOutput(Linha linha) {
		return modelMapper.map(linha, LinhaOutput.class);
	}
	
	public List<LinhaOutput> toListOutput(List<Linha> linhas) {
		return linhas.stream().map(linha -> toOutput(linha)).collect(Collectors.toList());
	}

}

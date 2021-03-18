package digital.aiko.desafioaiko.api.v1.dto.output;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VeiculoOutput {
	
	private Long id;
	
	private String nome;
	
	private String modelo;
	
	private LinhaOutput linha;
	
}

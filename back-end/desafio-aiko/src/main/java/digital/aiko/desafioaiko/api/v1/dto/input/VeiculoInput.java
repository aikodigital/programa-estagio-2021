package digital.aiko.desafioaiko.api.v1.dto.input;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VeiculoInput {

	@NotBlank
	private String nome;
	
	@NotBlank
	private String modelo;
	
	@Valid
	private LinhaIdInput linha;
	
}

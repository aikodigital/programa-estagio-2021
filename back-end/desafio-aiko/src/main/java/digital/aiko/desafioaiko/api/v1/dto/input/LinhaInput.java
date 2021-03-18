package digital.aiko.desafioaiko.api.v1.dto.input;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LinhaInput {
	
	@NotBlank
	private String nome;

}

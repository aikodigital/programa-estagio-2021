package digital.aiko.desafioaiko.api.v1.dto.input;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VeiculoIdInput {

	@NotNull
	private Long id;
	
}

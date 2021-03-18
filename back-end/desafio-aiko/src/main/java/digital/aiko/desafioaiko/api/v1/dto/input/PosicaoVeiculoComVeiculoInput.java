package digital.aiko.desafioaiko.api.v1.dto.input;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PosicaoVeiculoComVeiculoInput extends PosicaoVeiculoInput {

	@NotNull
	@Valid
	private VeiculoIdInput veiculo;
	
}

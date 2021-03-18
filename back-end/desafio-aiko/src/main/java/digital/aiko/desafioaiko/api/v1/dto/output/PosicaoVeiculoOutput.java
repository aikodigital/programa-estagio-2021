package digital.aiko.desafioaiko.api.v1.dto.output;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PosicaoVeiculoOutput {
	
	private Long id;
	
	private Double latitude;
	
	private Double longitude;

	private VeiculoOutput veiculo;

}

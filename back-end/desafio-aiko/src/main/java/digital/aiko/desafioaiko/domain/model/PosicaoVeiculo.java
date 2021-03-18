package digital.aiko.desafioaiko.domain.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class PosicaoVeiculo implements DomainModel {

	private static final long serialVersionUID = 1L;
	
	@EqualsAndHashCode.Include
	private Long id;
	
	private Double latitude;
	
	private Double longitude;

	private Veiculo veiculo;

}

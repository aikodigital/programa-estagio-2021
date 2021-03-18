package digital.aiko.desafioaiko.domain.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class Veiculo implements DomainModel {

	private static final long serialVersionUID = 1L;

	@EqualsAndHashCode.Include
	private Long id;
	
	private String nome;
	
	private String modelo;
	
	private Linha linha;
	
	public boolean temLinha() {
		return linha != null;
	}
	
}

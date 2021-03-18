package digital.aiko.desafioaiko.domain.model;

import java.util.Set;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
public class Linha implements DomainModel {

	private static final long serialVersionUID = 1L;
	
	@EqualsAndHashCode.Include
	private Long id;
	
	private String nome;
	
	private Set<Parada> paradas;
	
	public boolean adicionarParada(Parada parada) {
		return paradas.add(parada);
	}
	
	public boolean removerParada(Parada parada) {
		return paradas.remove(parada);
	}
	
}

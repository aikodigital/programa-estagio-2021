package digital.aiko.desafioaiko.infrastructure.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PreRemove;
import javax.persistence.JoinColumn;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@Entity(name = "linha")
public class LinhaJpa implements JpaEntity {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private Long id;
	
	private String nome;
	
	@ManyToMany
	@JoinTable(name = "linha_parada",
	joinColumns = @JoinColumn(name = "linha_id"),
	inverseJoinColumns = @JoinColumn(name = "parada_id"))
	private Set<ParadaJpa> paradas;
	
	@OneToMany(mappedBy = "linha")
	private Set<VeiculoJpa> veiculos;
	
	@PreRemove
	private void prepararRemocao() {
		veiculos.forEach(veiculo -> {
			veiculo.removerLinha();
		});
	}
	
}

package digital.aiko.desafioaiko.infrastructure.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.JoinColumn;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@Entity(name = "parada")
public class ParadaJpa implements JpaEntity {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private Long id;
	
	private String nome;
	
	private Double latitude;
	
	private Double longitude;
	
	@ManyToMany
	@JoinTable(name = "linha_parada",
	joinColumns = @JoinColumn(name = "parada_id"),
	inverseJoinColumns = @JoinColumn(name = "linha_id"))
	private Set<LinhaJpa> linhas;
	
}

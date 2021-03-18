package digital.aiko.desafioaiko.infrastructure.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@Entity(name = "veiculo")
public class VeiculoJpa implements JpaEntity {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private Long id;
	
	private String nome;
	
	private String modelo;

	@ManyToOne
	private LinhaJpa linha;
	
	@OneToOne(mappedBy = "veiculo", cascade = CascadeType.REMOVE)
	private PosicaoVeiculoJpa posicaoVeiculo;
	
	public void removerLinha() {
		linha = null;
	}

}

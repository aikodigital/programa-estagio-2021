package digital.aiko.desafioaiko.infrastructure.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity(name = "posicaoveiculo")
public class PosicaoVeiculoJpa implements JpaEntity {

	private static final long serialVersionUID = 1L;
	
	@Id
	@EqualsAndHashCode.Include
	private Long id;
	
	private Double latitude;
	
	private Double longitude;
	
	@MapsId
	@OneToOne
	private VeiculoJpa veiculo;

}

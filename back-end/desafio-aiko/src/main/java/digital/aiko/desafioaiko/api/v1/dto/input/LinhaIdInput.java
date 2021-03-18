package digital.aiko.desafioaiko.api.v1.dto.input;

import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LinhaIdInput {

	@NotNull
	private Long id;
	
}

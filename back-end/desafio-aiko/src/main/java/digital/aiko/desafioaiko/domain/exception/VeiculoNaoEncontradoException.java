package digital.aiko.desafioaiko.domain.exception;

public class VeiculoNaoEncontradoException extends EntidadeNaoEncontradaException {

	private static final long serialVersionUID = 1L;
	
	public VeiculoNaoEncontradoException(Long id) {
		super(String.format("O veículo de id %d não foi encontrado", id));
	}

}

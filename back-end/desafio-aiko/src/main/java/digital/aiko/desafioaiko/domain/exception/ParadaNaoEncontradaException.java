package digital.aiko.desafioaiko.domain.exception;

public class ParadaNaoEncontradaException extends EntidadeNaoEncontradaException {

	private static final long serialVersionUID = 1L;
	
	public ParadaNaoEncontradaException(Long id) {
		super(String.format("A parada de id %d não foi encontrada", id));
	}

}

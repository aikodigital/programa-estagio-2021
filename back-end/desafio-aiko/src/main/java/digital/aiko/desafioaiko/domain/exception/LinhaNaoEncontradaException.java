package digital.aiko.desafioaiko.domain.exception;

public class LinhaNaoEncontradaException extends EntidadeNaoEncontradaException {

	private static final long serialVersionUID = 1L;
	
	public LinhaNaoEncontradaException(Long id) {
		super(String.format("A linha de id %d não foi encontrada", id));
	}

}

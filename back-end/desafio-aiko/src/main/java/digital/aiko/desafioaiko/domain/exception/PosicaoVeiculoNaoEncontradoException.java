package digital.aiko.desafioaiko.domain.exception;

public class PosicaoVeiculoNaoEncontradoException extends EntidadeNaoEncontradaException {

	private static final long serialVersionUID = 1L;
	
	public PosicaoVeiculoNaoEncontradoException(Long id) {
		super(String.format("A posição do veículo de id %d não foi encontrado", id));
	}

}

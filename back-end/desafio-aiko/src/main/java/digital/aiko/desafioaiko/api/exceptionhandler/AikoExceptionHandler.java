package digital.aiko.desafioaiko.api.exceptionhandler;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import digital.aiko.desafioaiko.domain.exception.EntidadeNaoEncontradaException;
import digital.aiko.desafioaiko.domain.exception.RegraNegocioException;
import lombok.Builder;
import lombok.Getter;

@ControllerAdvice
public class AikoExceptionHandler extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler({DataIntegrityViolationException.class})
	public ResponseEntity<Object> handleDataIntegrityViolationException(DataIntegrityViolationException ex, WebRequest request) {
		List<Erro> erros = Arrays.asList(
				Erro.builder().descricao(ex.getMessage()).build()
		);
		
		return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
	}
	
	@ExceptionHandler({EmptyResultDataAccessException.class})
	public ResponseEntity<Object> handleEmptyResultDataAccessException(EmptyResultDataAccessException ex, WebRequest request) {
		List<Erro> erros = Arrays.asList(
				Erro.builder().descricao(ex.getMessage()).build()
		);
		
		return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
	}
	
	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
		List<Erro> erros = Arrays.asList(
				Erro.builder().descricao(ex.getMessage()).build()
		);

		return handleExceptionInternal(ex, erros, headers, HttpStatus.BAD_REQUEST, request);
	}
	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
		List<Erro> erros = criarListaErros(ex.getBindingResult());
		
		return handleExceptionInternal(ex, erros, headers, HttpStatus.BAD_REQUEST, request);
	}
	
	@ExceptionHandler({EntidadeNaoEncontradaException.class})
	public ResponseEntity<Object> handleEntidadeNaoEncontradaException(EntidadeNaoEncontradaException ex, WebRequest request) {
		List<Erro> erros = Arrays.asList(
					Erro.builder().descricao(ex.getMessage()).build()
		);
		
		return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
	}
	
	@ExceptionHandler({RegraNegocioException.class})
	public ResponseEntity<Object> handleRegraNegocioException(RegraNegocioException ex, WebRequest request) {
		List<Erro> erros = Arrays.asList(
					Erro.builder().descricao(ex.getMessage()).build()
		);
		
		return handleExceptionInternal(ex, erros, new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
	}
	
	public List<Erro> criarListaErros(BindingResult bindingResult) {
		return bindingResult.getFieldErrors().stream().map(erro -> {
			return Erro.builder()
					.descricao(erro.getDefaultMessage())
					.build();
		}).collect(Collectors.toList());
	}
	
	@Getter
	@Builder
	public static class Erro {
		private String descricao;
	}
	
}

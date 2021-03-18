package digital.aiko.desafioaiko.api.v1.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import digital.aiko.desafioaiko.api.v1.assembler.LinhaInputDissambler;
import digital.aiko.desafioaiko.api.v1.assembler.LinhaOutputAssembler;
import digital.aiko.desafioaiko.api.v1.dto.input.LinhaInput;
import digital.aiko.desafioaiko.api.v1.dto.output.LinhaOutput;
import digital.aiko.desafioaiko.domain.model.Linha;
import digital.aiko.desafioaiko.domain.service.LinhaService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/v1/linhas")
public class LinhaController {

	@Autowired
	private LinhaService linhaService;
	
	@Autowired
	private LinhaOutputAssembler linhaOutputAssembler;
	
	@Autowired
	private LinhaInputDissambler linhaInputDissambler;
	
	@Operation(summary = "Adiciona uma linha")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public LinhaOutput adicionar(@Valid @RequestBody LinhaInput linhaInput) {
		Linha linha = linhaInputDissambler.toDomainObject(linhaInput);
		linha = linhaService.salvar(linha);
		
		return linhaOutputAssembler.toOutput(linha);
	}
	
	@Operation(summary = "Deleta uma linha")
	@DeleteMapping("/{idLinha}")
	public ResponseEntity<Void> remover(@PathVariable Long idLinha) {
		linhaService.remover(idLinha);
		return ResponseEntity.noContent().build();
	}
	
	@Operation(summary = "Atualiza uma linha")
	@PutMapping("/{idLinha}")
	@ResponseStatus(HttpStatus.OK)
	public LinhaOutput atualizar(@PathVariable Long idLinha, @Valid @RequestBody LinhaInput linhaInput) {
		Linha linhaAtual = linhaService.buscarOuFalhar(idLinha);
		linhaInputDissambler.copyToDomainObject(linhaInput, linhaAtual);
		linhaAtual = linhaService.salvar(linhaAtual);
		
		return linhaOutputAssembler.toOutput(linhaAtual);
	}
	
	@Operation(summary = "Busca uma linha")
	@GetMapping("/{idLinha}")
	@ResponseStatus(HttpStatus.OK)
	public LinhaOutput buscarPeloId(@PathVariable Long idLinha) {
		Linha linhaAtual = linhaService.buscarOuFalhar(idLinha);
		
		return linhaOutputAssembler.toOutput(linhaAtual);
	}
	
	@Operation(summary = "Lista de todas as linhas de uma parada")
	@GetMapping("/paradas/{idParada}")
	@ResponseStatus(HttpStatus.OK)
	public List<LinhaOutput> filtrarPelaParada(@PathVariable Long idParada) {
		List<Linha> linhasAtuais = linhaService.filtrarPelaParada(idParada);
		
		return linhaOutputAssembler.toListOutput(linhasAtuais);
	}
	
	@Operation(summary = "Lista todas as linhas")
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<LinhaOutput> listar() {
		List<Linha> linhasAtuais = linhaService.listar();
		
		return linhaOutputAssembler.toListOutput(linhasAtuais);
	}
	
}

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

import digital.aiko.desafioaiko.api.v1.assembler.VeiculoInputDissambler;
import digital.aiko.desafioaiko.api.v1.assembler.VeiculoOutputAssembler;
import digital.aiko.desafioaiko.api.v1.dto.input.VeiculoInput;
import digital.aiko.desafioaiko.api.v1.dto.output.VeiculoOutput;
import digital.aiko.desafioaiko.domain.model.Veiculo;
import digital.aiko.desafioaiko.domain.service.VeiculoService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/v1/veiculos")
public class VeiculoController {

	@Autowired
	private VeiculoService veiculoService;
	
	@Autowired
	private VeiculoOutputAssembler veiculoOutputAssembler;
	
	@Autowired
	private VeiculoInputDissambler veiculoInputDissambler;

	@Operation(summary = "Adiciona um veículo")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public VeiculoOutput adicionar(@Valid @RequestBody VeiculoInput veiculoInput) {
		Veiculo veiculo = veiculoInputDissambler.toDomainObject(veiculoInput);
		veiculo = veiculoService.salvar(veiculo);
		
		return veiculoOutputAssembler.toOutput(veiculo);
	}
	
	@Operation(summary = "Remove um veículo")
	@DeleteMapping("/{idVeiculo}")
	public ResponseEntity<Void> remover(@PathVariable Long idVeiculo) {
		veiculoService.remover(idVeiculo);
		return ResponseEntity.noContent().build();
	}
	
	@Operation(summary = "Atualiza um veículo")
	@PutMapping("/{idVeiculo}")
	@ResponseStatus(HttpStatus.OK)
	public VeiculoOutput atualizar(@PathVariable Long idVeiculo, @Valid @RequestBody VeiculoInput veiculoInput) {
		Veiculo veiculoAtual = veiculoService.buscarOuFalhar(idVeiculo);
		veiculoInputDissambler.copyToDomainObject(veiculoInput, veiculoAtual);
		veiculoAtual = veiculoService.salvar(veiculoAtual);
		
		return veiculoOutputAssembler.toOutput(veiculoAtual);
	}
	
	@Operation(summary = "Busca um veículo")
	@GetMapping("/{idVeiculo}")
	@ResponseStatus(HttpStatus.OK)
	public VeiculoOutput buscarPeloId(@PathVariable Long idVeiculo) {
		Veiculo veiculoAtual = veiculoService.buscarOuFalhar(idVeiculo);
		
		return veiculoOutputAssembler.toOutput(veiculoAtual);
	}
	
	@Operation(summary = "Lista de todos os veículos de uma linha")
	@GetMapping("/linhas/{idLinha}")
	@ResponseStatus(HttpStatus.OK)
	public List<VeiculoOutput> filtrarPelaLinha(@PathVariable Long idLinha) {
		List<Veiculo> veiculosAtuais = veiculoService.filtrarPelaLinha(idLinha);
		
		return veiculoOutputAssembler.toListOutput(veiculosAtuais);
	}
	
	@Operation(summary = "Lista todos os veículos")
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<VeiculoOutput> listar() {
		List<Veiculo> veiculosAtuais = veiculoService.listar();
		
		return veiculoOutputAssembler.toListOutput(veiculosAtuais);
	}
}

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

import digital.aiko.desafioaiko.api.v1.assembler.PosicaoVeiculoInputDissambler;
import digital.aiko.desafioaiko.api.v1.assembler.PosicaoVeiculoOutputAssembler;
import digital.aiko.desafioaiko.api.v1.dto.input.PosicaoVeiculoComVeiculoInput;
import digital.aiko.desafioaiko.api.v1.dto.input.PosicaoVeiculoInput;
import digital.aiko.desafioaiko.api.v1.dto.output.PosicaoVeiculoOutput;
import digital.aiko.desafioaiko.domain.model.PosicaoVeiculo;
import digital.aiko.desafioaiko.domain.service.PosicaoVeiculoService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/v1/posicao-veiculos")
public class PosicaoVeiculoController {

	@Autowired
	private PosicaoVeiculoService posicaoVeiculoService;
	
	@Autowired
	private PosicaoVeiculoOutputAssembler posicaoVeiculoOutputAssembler;
	
	@Autowired
	private PosicaoVeiculoInputDissambler posicaoVeiculoInputDissambler;
	
	@Operation(summary = "Adiciona a posição do veículo")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public PosicaoVeiculoOutput adicionar(@Valid @RequestBody PosicaoVeiculoComVeiculoInput posicaoVeiculoInput) {
		PosicaoVeiculo posicaoVeiculo = posicaoVeiculoInputDissambler.toDomainObject(posicaoVeiculoInput);
		posicaoVeiculo = posicaoVeiculoService.salvar(posicaoVeiculo);
		
		return posicaoVeiculoOutputAssembler.toOutput(posicaoVeiculo);
	}
	
	@Operation(summary = "Remove a posição do veículo")
	@DeleteMapping("/{idPosicaoVeiculo}")
	public ResponseEntity<Void> remover(@PathVariable Long idPosicaoVeiculo) {
		posicaoVeiculoService.remover(idPosicaoVeiculo);
		return ResponseEntity.noContent().build();
	}
	
	@Operation(summary = "Adiciona a posição do veículo")
	@PutMapping("/{idPosicaoVeiculo}")
	@ResponseStatus(HttpStatus.OK)
	public PosicaoVeiculoOutput atualizar(@PathVariable Long idPosicaoVeiculo, @Valid @RequestBody PosicaoVeiculoInput posicaoVeiculoInput) {
		PosicaoVeiculo posicaoVeiculoAtual = posicaoVeiculoService.buscarOuFalhar(idPosicaoVeiculo);
		posicaoVeiculoInputDissambler.copyToDomainObject(posicaoVeiculoInput, posicaoVeiculoAtual);
		posicaoVeiculoAtual = posicaoVeiculoService.salvar(posicaoVeiculoAtual);
		
		return posicaoVeiculoOutputAssembler.toOutput(posicaoVeiculoAtual);
	}
	
	@Operation(summary = "Busca uma posição do veículo")
	@GetMapping("/{idPosicaoVeiculo}")
	@ResponseStatus(HttpStatus.OK)
	public PosicaoVeiculoOutput buscarPeloId(@PathVariable Long idPosicaoVeiculo) {
		PosicaoVeiculo posicaoVeiculoAtual = posicaoVeiculoService.buscarOuFalhar(idPosicaoVeiculo);
		
		return posicaoVeiculoOutputAssembler.toOutput(posicaoVeiculoAtual);
	}
	
	@Operation(summary = "Lista todas as posições de todos os veículos")
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<PosicaoVeiculoOutput> listar() {
		List<PosicaoVeiculo> posicaoVeiculosAtuais = posicaoVeiculoService.listar();
		
		return posicaoVeiculoOutputAssembler.toListOutput(posicaoVeiculosAtuais);
	}
}

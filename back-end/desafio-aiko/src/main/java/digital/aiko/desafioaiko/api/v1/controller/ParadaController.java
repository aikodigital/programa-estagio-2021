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

import digital.aiko.desafioaiko.api.v1.assembler.ParadaInputDissambler;
import digital.aiko.desafioaiko.api.v1.assembler.ParadaOutputAssembler;
import digital.aiko.desafioaiko.api.v1.dto.input.ParadaInput;
import digital.aiko.desafioaiko.api.v1.dto.output.ParadaOutput;
import digital.aiko.desafioaiko.domain.model.Parada;
import digital.aiko.desafioaiko.domain.service.ParadaService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/v1/paradas")
public class ParadaController {
	
	@Autowired
	private ParadaService paradaService;
	
	@Autowired
	private ParadaOutputAssembler paradaOutputAssembler;
	
	@Autowired
	private ParadaInputDissambler paradaInputDissambler;
	
	@Operation(summary = "Adiciona uma parada")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ParadaOutput adicionar(@Valid @RequestBody ParadaInput paradaInput) {
		Parada parada = paradaInputDissambler.toDomainObject(paradaInput);
		parada = paradaService.salvar(parada);
		
		return paradaOutputAssembler.toOutput(parada);
	}
	
	@Operation(summary = "Deleta uma parada")
	@DeleteMapping("/{idParada}")
	public ResponseEntity<Void> remover(@PathVariable Long idParada) {
		paradaService.remover(idParada);
		return ResponseEntity.noContent().build();
	}
	
	@Operation(summary = "Atualiza uma parada")
	@PutMapping("/{idParada}")
	@ResponseStatus(HttpStatus.OK)
	public ParadaOutput atualizar(@PathVariable Long idParada, @Valid @RequestBody ParadaInput paradaInput) {
		Parada paradaAtual = paradaService.buscarOuFalhar(idParada);
		paradaInputDissambler.copyToDomainObject(paradaInput, paradaAtual);
		paradaAtual = paradaService.salvar(paradaAtual);
		
		return paradaOutputAssembler.toOutput(paradaAtual);
	}
	
	@Operation(summary = "Busca uma parada")
	@GetMapping("/{idParada}")
	@ResponseStatus(HttpStatus.OK)
	public ParadaOutput buscarPeloId(@PathVariable Long idParada) {
		Parada paradaAtual = paradaService.buscarOuFalhar(idParada);
		
		return paradaOutputAssembler.toOutput(paradaAtual);
	}
	
	@Operation(summary = "Lista as paradas em ordem crescente com relação à distância entre a coordenada informada e a parada")
	@GetMapping("/{latitude}/{longitude}")
	@ResponseStatus(HttpStatus.OK)
	public List<ParadaOutput> listarPelaProximidade(@PathVariable Double latitude, @PathVariable Double longitude) {
		List<Parada> paradasAtuais = paradaService.listarPelaProximidade(latitude, longitude);
		
		return paradaOutputAssembler.toListOutput(paradasAtuais);
	}
	
	@Operation(summary = "Lista todas as paradas")
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<ParadaOutput> listar() {
		List<Parada> paradasAtuais = paradaService.listar();
		
		return paradaOutputAssembler.toListOutput(paradasAtuais);
	}

}

package digital.aiko.desafioaiko.api.v1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import digital.aiko.desafioaiko.domain.service.LinhaService;
import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/v1/linhas/{idLinha}/paradas")
public class LinhaParadaController {
	
	@Autowired
	private LinhaService linhaService;

	@Operation(summary = "Associa uma linha com uma parada")
	@PutMapping("/{idParada}")
	public ResponseEntity<Void> associar(@PathVariable Long idLinha, @PathVariable Long idParada) {
		linhaService.associarParada(idLinha, idParada);
		
		return ResponseEntity.noContent().build();
	}
	
	@Operation(summary = "Desassocia a linha da parada")
	@DeleteMapping("/{idParada}")
	public ResponseEntity<Void> desassociar(@PathVariable Long idLinha, @PathVariable Long idParada) {
		linhaService.desassociarParada(idLinha, idParada);
		
		return ResponseEntity.noContent().build();
	}
}

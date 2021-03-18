package digital.aiko.desafioaiko.domain.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import digital.aiko.desafioaiko.domain.exception.LinhaNaoEncontradaException;
import digital.aiko.desafioaiko.domain.exception.ParadaNaoEncontradaException;
import digital.aiko.desafioaiko.domain.model.Linha;
import digital.aiko.desafioaiko.domain.model.Parada;
import digital.aiko.desafioaiko.domain.repository.LinhaRepository;
import digital.aiko.desafioaiko.domain.service.LinhaService;
import digital.aiko.desafioaiko.domain.service.ParadaService;

@Service
public class LinhaServiceImpl implements LinhaService {

	@Autowired
	private LinhaRepository linhaRepository;
	
	@Autowired
	private ParadaService paradaService;
	
	@Transactional
	public Linha salvar(Linha linha) {
		return linhaRepository.save(linha);
	}
	
	@Transactional
	public void remover(Long idLinha) {
		try {
			linhaRepository.deleteById(idLinha);
			linhaRepository.flush();
		} catch(EmptyResultDataAccessException er) {
			throw new ParadaNaoEncontradaException(idLinha);
		}
	}
	
	@Transactional
	public void associarParada(Long idLinha, Long idParada) {
		Linha linha = buscarOuFalhar(idLinha);
		Parada parada = paradaService.buscarOuFalhar(idParada);
		
		linha.adicionarParada(parada);
		
		salvar(linha);
	}
	
	@Transactional
	public void desassociarParada(Long idLinha, Long idParada) {
		Linha linha = buscarOuFalhar(idLinha);
		Parada parada = paradaService.buscarOuFalhar(idParada);

		linha.removerParada(parada);
		
		salvar(linha);
	}
	
	public Linha buscarOuFalhar(Long idLinha) {
		return linhaRepository.findById(idLinha).orElseThrow(() -> new LinhaNaoEncontradaException(idLinha));
	}
	
	public List<Linha> filtrarPelaParada(Long idParada) {
		return linhaRepository.filtrarPelaParada(idParada);
	}

	public List<Linha> listar() {
		return linhaRepository.findAll();
	}
	
}

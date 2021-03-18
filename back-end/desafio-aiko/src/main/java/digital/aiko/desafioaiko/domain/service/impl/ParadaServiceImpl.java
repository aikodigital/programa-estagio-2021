package digital.aiko.desafioaiko.domain.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import digital.aiko.desafioaiko.domain.exception.ParadaNaoEncontradaException;
import digital.aiko.desafioaiko.domain.model.Parada;
import digital.aiko.desafioaiko.domain.repository.ParadaRepository;
import digital.aiko.desafioaiko.domain.service.ParadaService;

@Service
public class ParadaServiceImpl implements ParadaService {

	@Autowired
	private ParadaRepository paradaRepository;
	
	@Transactional
	public Parada salvar(Parada parada) {
		return paradaRepository.save(parada);
	}
	
	@Transactional
	public void remover(Long idParada) {
		try {
			paradaRepository.deleteById(idParada);
			paradaRepository.flush();
		} catch(EmptyResultDataAccessException er) {
			throw new ParadaNaoEncontradaException(idParada);
		}
	}
	
	public Parada buscarOuFalhar(Long idParada) {
		return paradaRepository.findById(idParada).orElseThrow(() -> new ParadaNaoEncontradaException(idParada));
	}
	
	public List<Parada> listarPelaProximidade(Double latitude, Double longitude) {
		return paradaRepository.listarPelaProximidade(latitude, longitude);
	}
	
	public List<Parada> listar() {
		return paradaRepository.findAll();
	}
	
}

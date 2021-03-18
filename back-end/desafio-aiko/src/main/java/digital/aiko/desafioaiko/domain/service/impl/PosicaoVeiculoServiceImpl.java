package digital.aiko.desafioaiko.domain.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import digital.aiko.desafioaiko.domain.exception.ParadaNaoEncontradaException;
import digital.aiko.desafioaiko.domain.exception.PosicaoVeiculoNaoEncontradoException;
import digital.aiko.desafioaiko.domain.model.PosicaoVeiculo;
import digital.aiko.desafioaiko.domain.model.Veiculo;
import digital.aiko.desafioaiko.domain.repository.PosicaoVeiculoRepository;
import digital.aiko.desafioaiko.domain.service.PosicaoVeiculoService;
import digital.aiko.desafioaiko.domain.service.VeiculoService;

@Service
public class PosicaoVeiculoServiceImpl implements PosicaoVeiculoService {

	@Autowired
	private PosicaoVeiculoRepository posicaoVeiculoRepository;
	
	@Autowired
	private VeiculoService veiculoService;
	
	@Transactional
	public PosicaoVeiculo salvar(PosicaoVeiculo posicaoVeiculo) {
		Long idVeiculo = posicaoVeiculo.getVeiculo().getId();
		
		Veiculo veiculo = veiculoService.buscarOuFalhar(idVeiculo);
		posicaoVeiculo.setVeiculo(veiculo);
		
		return posicaoVeiculoRepository.save(posicaoVeiculo);
	}
	
	@Transactional
	public void remover(Long idPosicaoVeiculo) {
		try {
			posicaoVeiculoRepository.deleteById(idPosicaoVeiculo);
			posicaoVeiculoRepository.flush();
		} catch(EmptyResultDataAccessException er) {
			throw new ParadaNaoEncontradaException(idPosicaoVeiculo);
		}
	}
	
	public PosicaoVeiculo buscarOuFalhar(Long idPosicaoVeiculo) {
		return posicaoVeiculoRepository.findById(idPosicaoVeiculo).orElseThrow(() -> new PosicaoVeiculoNaoEncontradoException(idPosicaoVeiculo));
	}
	
	public List<PosicaoVeiculo> listar() {
		return posicaoVeiculoRepository.findAll();
	}
	
}

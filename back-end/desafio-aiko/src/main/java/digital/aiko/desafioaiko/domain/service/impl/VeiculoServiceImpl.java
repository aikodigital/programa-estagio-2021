package digital.aiko.desafioaiko.domain.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import digital.aiko.desafioaiko.domain.exception.ParadaNaoEncontradaException;
import digital.aiko.desafioaiko.domain.exception.VeiculoNaoEncontradoException;
import digital.aiko.desafioaiko.domain.model.Linha;
import digital.aiko.desafioaiko.domain.model.Veiculo;
import digital.aiko.desafioaiko.domain.repository.VeiculoRepository;
import digital.aiko.desafioaiko.domain.service.LinhaService;
import digital.aiko.desafioaiko.domain.service.VeiculoService;

@Service
public class VeiculoServiceImpl implements VeiculoService {
	
	@Autowired
	private VeiculoRepository veiculoRepository;
	
	@Autowired
	private LinhaService linhaService;
	
	@Transactional
	public Veiculo salvar(Veiculo veiculo) {
		if (veiculo.temLinha()) {
			Long idLinha = veiculo.getLinha().getId();
			
			Linha linha = linhaService.buscarOuFalhar(idLinha);
			veiculo.setLinha(linha);
		}
		
		return veiculoRepository.save(veiculo);
	}
	
	@Transactional
	public void remover(Long idVeiculo) {
		try {
			veiculoRepository.deleteById(idVeiculo);
			veiculoRepository.flush();
		} catch(EmptyResultDataAccessException er) {
			throw new ParadaNaoEncontradaException(idVeiculo);
		}
	}
	
	public Veiculo buscarOuFalhar(Long idVeiculo) {
		return veiculoRepository.findById(idVeiculo).orElseThrow(() -> new VeiculoNaoEncontradoException(idVeiculo));
	}
	
	public List<Veiculo> filtrarPelaLinha(Long idLinha) {
		return veiculoRepository.filtrarPelaLinha(idLinha);
	}
	
	public List<Veiculo> listar() {
		return veiculoRepository.findAll();
	}

}

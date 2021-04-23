package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.PosicaoVeiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface PosicaoVeiculoRepository extends JpaRepository<PosicaoVeiculo, Long> {
}

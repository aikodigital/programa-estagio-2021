package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {

    @Query(value = "SELECT id_veiculo FROM veiculo WHERE linha_id_linha = :id", nativeQuery = true)
    List<Long> findByLinha_Id(Long id);
}

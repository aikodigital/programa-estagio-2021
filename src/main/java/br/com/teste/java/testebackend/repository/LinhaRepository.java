package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.Linha;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;



@Repository
public interface LinhaRepository extends JpaRepository<Linha, Long>{
    @Query(value = "SELECT linha_id FROM linha_parada WHERE parada_id = :id", nativeQuery = true)
    List<Long> findByParadas_Id(Long id);
}

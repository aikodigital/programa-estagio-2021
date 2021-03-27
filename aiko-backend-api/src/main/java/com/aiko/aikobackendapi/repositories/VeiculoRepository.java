package com.aiko.aikobackendapi.repositories;

import com.aiko.aikobackendapi.domain.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {

    @Query(value = "SELECT id FROM veiculo WHERE linha_id = :id", nativeQuery = true)
    List<Long> findByLinhaId(@Param("id") long id);

}

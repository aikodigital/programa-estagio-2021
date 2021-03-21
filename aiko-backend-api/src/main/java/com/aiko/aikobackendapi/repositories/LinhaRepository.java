package com.aiko.aikobackendapi.repositories;

import com.aiko.aikobackendapi.domain.Linha;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface LinhaRepository extends JpaRepository<Linha, Long> {

    @Query(value = "SELECT linha_id FROM linha_parada WHERE parada_id = :id", nativeQuery = true)
    List<Long> findByParadaId(@Param("id") long id);

}

package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.Line;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LineRepository extends JpaRepository<Line, Long>{
    @Query(value = "SELECT line_id FROM line_stop WHERE stop_id = :id", nativeQuery = true)
    List<Long> findByStopsId(Long id);
}

package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.Stop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StopRepository extends JpaRepository<Stop, Long> {
    List<Stop> findByName(String name);
}

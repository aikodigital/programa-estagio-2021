package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.Parada;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ParadaRepository extends JpaRepository<Parada, Long> {
    List<Parada> findByName(String name);
}

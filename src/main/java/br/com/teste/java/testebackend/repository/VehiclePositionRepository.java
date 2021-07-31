package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.VehiclePosition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface VehiclePositionRepository extends JpaRepository<VehiclePosition, Long> {
}

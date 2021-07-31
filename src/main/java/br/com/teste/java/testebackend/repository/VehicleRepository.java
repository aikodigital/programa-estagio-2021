package br.com.teste.java.testebackend.repository;

import br.com.teste.java.testebackend.domain.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    @Query(value = "SELECT id_vehicle FROM vehicle WHERE line_id_line = :id", nativeQuery = true)
    List<Long> findByLineId(Long id);
}

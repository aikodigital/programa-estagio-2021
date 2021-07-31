package br.com.teste.java.testebackend.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
public class VehiclePosition implements Serializable {

    private static final long serialVersionUID = -3656431259068389491L;

    @Id
    @GeneratedValue
    private Long id;
    private double latitude;
    private double longitude;
    private long vehicleId;
}

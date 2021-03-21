package com.aiko.aikobackendapi.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "posicaoveiculo")
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class PosicaoVeiculo implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double latitude;
    private double longitude;
    private long veiculoId;

    public PosicaoVeiculo(double latitude, double longitude, Veiculo veiculo) {
        super();
        this.latitude = latitude;
        this.longitude = longitude;
        this.veiculoId = veiculo.getId();
    }

    public PosicaoVeiculo() {
        super();
    }
}

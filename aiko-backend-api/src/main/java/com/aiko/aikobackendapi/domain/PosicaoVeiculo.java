package com.aiko.aikobackendapi.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.Entity;
import java.io.Serializable;

@Entity
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class PosicaoVeiculo implements Serializable {
    private static final long serialVersionUID = 1L;

    private double latitude;
    private double longitude;
    private long veiculoId;


}

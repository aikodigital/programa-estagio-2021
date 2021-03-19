package com.aiko.aikobackendapi.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Veiculo implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String modelo;
    private long linhaId;

    public Veiculo() {
        super();
    }

    public Veiculo(String name, String modelo, long linhaId) {
        super();
        this.name = name;
        this.modelo = modelo;
        this.linhaId = linhaId;
    }
}

package com.aiko.aikobackendapi.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
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

    //@ManyToOne
   // @JoinColumn(name = "linha_id")
    private long linhaId;

    public Veiculo() {
        super();
    }

    public Veiculo(String name, String modelo, long linhaId, Linha linha) {
        super();
        this.name = name;
        this.modelo = modelo;
        this.linhaId = linha.getId();
    }
}

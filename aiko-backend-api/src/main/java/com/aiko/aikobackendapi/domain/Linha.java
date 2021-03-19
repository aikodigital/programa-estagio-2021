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
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Linha implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private List<Parada> paradas;

    public Linha(String name, List<Parada> paradas) {
        super();
        this.name = name;
        this.paradas = paradas;
    }

    public Linha() {
        super();
    }
}

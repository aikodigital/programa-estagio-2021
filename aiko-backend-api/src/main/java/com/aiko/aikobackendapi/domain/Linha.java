package com.aiko.aikobackendapi.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
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

    @JsonBackReference
    @ManyToMany
    @JoinTable(
            name = "linha_parada",
            joinColumns = @JoinColumn(name = "linha_id"),
            inverseJoinColumns = @JoinColumn(name = "parada_id")
    )
    private List<Parada> paradas  = new ArrayList();

    public Linha(String name) {
        super();
        this.name = name;
    }

    public Linha() {
        super();
    }
}

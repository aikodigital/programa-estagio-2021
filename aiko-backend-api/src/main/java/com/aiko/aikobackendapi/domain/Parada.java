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
public class Parada implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private double latitude;
    private double longitude;

    @JsonBackReference
    @ManyToMany(mappedBy = "paradas")
    private List<Linha> linhas = new ArrayList();

    public Parada(String name, double latitude, double longitude) {
        super();
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Parada() {
        super();
    }

}
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
public class Parada implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private double latitude;
    private double longitude;

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
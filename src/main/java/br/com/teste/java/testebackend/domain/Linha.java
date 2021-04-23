package br.com.teste.java.testebackend.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class Linha implements Serializable {

    private static final long serialVersionUID = -3656431259068389491L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID_LINHA", unique = true, nullable = false)
    private Long id;


    private String name;
    private double latitude;
    private double longitude;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "LINHA_PARADA",
            joinColumns = @JoinColumn(name = "linha_id"),
            inverseJoinColumns = @JoinColumn(name = "parada_id")
    )
    private List<Parada> paradas = new ArrayList();

}

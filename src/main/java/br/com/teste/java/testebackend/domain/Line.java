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
public class Line implements Serializable {

    private static final long serialVersionUID = -3656431259068389491L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_line", unique = true, nullable = false)
    private Long id;


    private String name;
    private double latitude;
    private double longitude;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "LINE_STOP",
            joinColumns = @JoinColumn(name = "line_id"),
            inverseJoinColumns = @JoinColumn(name = "stop_id")
    )
    private List<Stop> stops = new ArrayList();

}

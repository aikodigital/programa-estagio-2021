package br.com.teste.java.testebackend.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
public class Veiculo implements Serializable {

    private static final long serialVersionUID = -3656431259068389491L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_veiculo", unique = true)
    private Long id;
    private String name;
    private String modelo;

    @ManyToOne(fetch = FetchType.EAGER)
    private Linha linha;
}

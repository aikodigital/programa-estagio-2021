package br.com.teste.java.testebackend.requests;

import lombok.Data;

@Data
public class VeiculoPutRequestBody {
    private Long id;
    private String name;
    private String modelo;
}

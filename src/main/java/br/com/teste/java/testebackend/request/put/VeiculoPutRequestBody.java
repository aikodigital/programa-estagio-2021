package br.com.teste.java.testebackend.request.put;

import lombok.Data;

@Data
public class VeiculoPutRequestBody {
    private Long id;
    private String name;
    private String modelo;
}

package br.com.teste.java.testebackend.request.put;

import lombok.Data;

@Data
public class ParadaPutRequestBody {
    private Long id;
    private String name;
    private double latitude;
    private double longitude;
}

package br.com.teste.java.testebackend.requests;

import lombok.Data;

@Data
public class ParadaPostRequestBody {
    private String name;
    private double latitude;
    private double longitude;
}

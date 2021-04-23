package br.com.teste.java.testebackend.requests;

import lombok.Data;

@Data
public class PosicaoVeiculoPutRequestBody {
    private Long id;
    private double latitude;
    private double Longitude;
}

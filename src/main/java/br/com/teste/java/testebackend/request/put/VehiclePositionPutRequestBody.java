package br.com.teste.java.testebackend.request.put;

import lombok.Data;

@Data
public class VehiclePositionPutRequestBody {
    private Long id;
    private double latitude;
    private double Longitude;
}

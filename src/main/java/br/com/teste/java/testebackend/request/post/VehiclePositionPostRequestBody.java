package br.com.teste.java.testebackend.request.post;

import lombok.Data;

@Data
public class VehiclePositionPostRequestBody {
    private double latitude;
    private double Longitude;
}

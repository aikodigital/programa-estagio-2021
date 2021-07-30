package br.com.teste.java.testebackend.request.post;


import lombok.Data;

@Data
public class LinhaPostRequestBody {
    private String name;
    private double latitude;
    private double longitude;
}

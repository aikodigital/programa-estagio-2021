package br.com.teste.java.testebackend.request.post;


import lombok.Data;

@Data
public class LinePostRequestBody {
    private String name;
    private double latitude;
    private double longitude;
}

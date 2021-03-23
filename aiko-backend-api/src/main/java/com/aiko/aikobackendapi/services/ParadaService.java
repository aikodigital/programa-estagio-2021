package com.aiko.aikobackendapi.services;

import com.aiko.aikobackendapi.domain.Parada;
import com.aiko.aikobackendapi.repositories.ParadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class ParadaService {

    @Autowired
    private ParadaRepository paradaRepository;

    public Parada buscar(long id) {
        Optional<Parada> parada = paradaRepository.findById(id);

        return parada.orElse(null);
    }

    public List<Parada> listar() {
        List<Parada> paradas = paradaRepository.findAll();

        return (paradas.isEmpty()) ? null : paradas;
    }

    public void adicionar(Parada parada) {
        paradaRepository.saveAll(Arrays.asList(parada));

    }

    public void atualizar(Parada parada) {
        paradaRepository.saveAll(Arrays.asList(parada));

    }

    public void deletar(Parada parada) {

        paradaRepository.delete(parada);

    }

    public void deletar(long id) {

        paradaRepository.deleteById(id);

    }

    //Recebe uma posição (lat, long) como parâmetro e retorna a parada mais proxima a posição informada
    public Parada paradasPorPosicao(double latitute, double longitude) {
        List<Parada> paradas = listar();

        double distancia_menor = calcularDistanciaEntreParadas(latitute, longitude, paradas.get(0).getLatitude(), paradas.get(0).getLongitude());

        int distancia_menor_index = 0;

        for(int i = 1; i < paradas.size(); i++) {
            double distancia = calcularDistanciaEntreParadas(latitute, longitude, paradas.get(i).getLatitude(), paradas.get(i).getLongitude());

            if(distancia < distancia_menor) {
                distancia_menor = distancia;
                distancia_menor_index = i;
            }
        }

        return paradas.get(distancia_menor_index);
    }

    //calculo da distancia entre duas coordenadas: (latitude1,longitude1) e (latitude2,longitude2) utilizando a Equacacao Haversine
    public double calcularDistanciaEntreParadas(double latitute1, double longitude1, double latitute2, double longitude2){
        final int R = 6371;

        Double latDistancia = toRad(latitute2 - latitute1);
        Double lonDistancia = toRad(longitude2 - longitude1);

        Double a = Math.sin(latDistancia / 2) * Math.sin(latDistancia / 2) +
                Math.cos(toRad(latitute1)) * Math.cos(toRad(latitute2)) *
                        Math.sin(lonDistancia / 2) * Math.sin(lonDistancia / 2);

        Double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        Double distancia = R * c;

        return distancia;
    }

    //converte para radianos
    private Double toRad(Double valor) {

        return valor * Math.PI / 180;
    }
}

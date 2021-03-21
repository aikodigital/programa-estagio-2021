package com.aiko.aikobackendapi;

import com.aiko.aikobackendapi.domain.Linha;
import com.aiko.aikobackendapi.domain.Parada;
import com.aiko.aikobackendapi.services.LinhaService;
import com.aiko.aikobackendapi.services.ParadaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AikoBackendApiApplication  implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(AikoBackendApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

/*		//OBJETOS
		Parada parada1 = new Parada("Esquina 1", 2, 3);
		Parada parada2 = new Parada("Esquina 2", 2, 3);

		Linha linha1 = new Linha("Centro - RJ");
		Linha linha2 = new Linha("Centro - SP");


		//SALVANDO BANCO DE DADOS
		linhaService.adicionar(linha1);
		linhaService.adicionar(linha2);

		//ADICIONANDO NAS LISTAS
*//*		linha1.getParadas().add(parada1);
		linha2.getParadas().add(parada2);*//*

		parada1.getLinhas().add(linha1);
		parada1.getLinhas().add(linha2);
		parada2.getLinhas().add(linha2);

		//SALVANDO BANCO DE DADOS
		paradaService.adicionar(parada1);
		paradaService.adicionar(parada2);*/

		//OBJETOS
		Parada parada1 = new Parada("Esquina 1", 2, 3);
		Parada parada2 = new Parada("Esquina 2", 2, 3);

		Linha linha1 = new Linha("Centro - RJ");
		Linha linha2 = new Linha("Centro - SP");


		//SALVANDO BANCO DE DADOS
		paradaService.adicionar(parada1);
		paradaService.adicionar(parada2);

		//ADICIONANDO NAS LISTAS
		linha1.getParadas().add(parada1);
		linha2.getParadas().add(parada2);


		//SALVANDO BANCO DE DADOS
		linhaService.adicionar(linha1);
		linhaService.adicionar(linha2);

		//ALTERANDO LINHA 1
		linha1.getParadas().add(parada2);
		linhaService.atualizar(linha1);



	}

	@Autowired
	private LinhaService linhaService;

	@Autowired
	private ParadaService paradaService;
}

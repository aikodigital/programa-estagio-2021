package br.com.teste.java.testebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class TesteBackEndApplication {
	public static void main(String[] args) {
		SpringApplication.run(TesteBackEndApplication.class, args);
	}
}

package br.com.teste.java.testebackend.controller;


import br.com.teste.java.testebackend.domain.Linha;
import br.com.teste.java.testebackend.service.LinhaService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
class LinhaControllerTest {

    @InjectMocks
    private LinhaController linhaController;
    @Mock
    private LinhaService linhaMock;

    @BeforeEach
    void setUp(){
    }

    @Test
    void test(){

    }

}
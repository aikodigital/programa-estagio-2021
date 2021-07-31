package br.com.teste.java.testebackend.api;


import br.com.teste.java.testebackend.api.resource.read.LineResourceRead;
import br.com.teste.java.testebackend.api.resource.write.LineResourceWrite;
import br.com.teste.java.testebackend.service.impl.LineService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
class LineControllerTest {

    @InjectMocks
    private LineResourceRead lineResourceRead;

    @InjectMocks
    private LineResourceWrite lineResourceWrite;

    @Mock
    private LineService linhaMock;

    @BeforeEach
    void setUp(){
    }

    @Test
    void test(){

    }

}
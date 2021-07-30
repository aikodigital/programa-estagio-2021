package br.com.teste.java.testebackend.api;


import br.com.teste.java.testebackend.api.resource.read.LinhaResourceRead;
import br.com.teste.java.testebackend.api.resource.write.LinhaResourceWrite;
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
    private LinhaResourceRead linhaResourceRead;

    @InjectMocks
    private LinhaResourceWrite linhaResourceWrite;

    @Mock
    private LinhaService linhaMock;

    @BeforeEach
    void setUp(){
    }

    @Test
    void test(){

    }

}
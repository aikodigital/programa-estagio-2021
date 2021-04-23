package br.com.teste.java.testebackend.util;

import br.com.teste.java.testebackend.domain.Linha;

public class LinhaCreator {
    public static Linha createLinhaToBeSaved(){
        return Linha.builder()
                .name("Samambaia Sul (1 Avenida) > SIA > SAAN\n")
                .longitude(-48.06949981715757)
                .latitude(-15.87413603405216)
                .build();
    }
    public static Linha createValidLinha(){
        return Linha.builder()
                .name("Samambaia Sul (1 Avenida) > SIA > SAAN\n")
                .id(1L)
                .longitude(-48.06949981715757)
                .latitude(-15.87413603405216)
                .build();
    }
    public static Linha createUpdatedLinha(){
        return Linha.builder()
                .id(1L)
                .name("Samambaia Sul (1 Avenida) > SIA > SIG\n")
                .longitude(-48.06949981715757)
                .latitude(-15.87413603405216)
                .build();
    }
}

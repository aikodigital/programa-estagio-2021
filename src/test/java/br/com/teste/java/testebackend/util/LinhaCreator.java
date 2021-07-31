package br.com.teste.java.testebackend.util;

import br.com.teste.java.testebackend.domain.Line;

public class LinhaCreator {
    public static Line createLinhaToBeSaved(){
        return Line.builder()
                .name("Samambaia Sul (1 Avenida) > SIA > SAAN\n")
                .longitude(-48.06949981715757)
                .latitude(-15.87413603405216)
                .build();
    }
    public static Line createValidLinha(){
        return Line.builder()
                .name("Samambaia Sul (1 Avenida) > SIA > SAAN\n")
                .id(1L)
                .longitude(-48.06949981715757)
                .latitude(-15.87413603405216)
                .build();
    }
    public static Line createUpdatedLinha(){
        return Line.builder()
                .id(1L)
                .name("Samambaia Sul (1 Avenida) > SIA > SIG\n")
                .longitude(-48.06949981715757)
                .latitude(-15.87413603405216)
                .build();
    }
}

package br.com.teste.java.testebackend.configurer;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class TesteBackEndWebMvcConfigurer implements WebMvcConfigurer {
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        PageableHandlerMethodArgumentResolver pagaHandler =
                new PageableHandlerMethodArgumentResolver();
        pagaHandler.setFallbackPageable(PageRequest.of(0, 5));
        resolvers.add(pagaHandler);
    }
}

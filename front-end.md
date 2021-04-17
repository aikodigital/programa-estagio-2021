# Teste Front-end

Neste teste serão avaliados seus conhecimentos em HTML, CSS e JavaScript, a criatividade e metodologia aplicada no desenvolvimento, a usabilidade e design da aplicação final.

## O Desafio

Seu objetivo é criar um *dashboard* que exiba dados sobre o transporte público da cidade de São Paulo, consultando a [API **Olho Vivo**](api.md) que provê informações em tempo real do monitoramento da frota de ônibus da cidade de São Paulo.

## Requisitos

Esses requisitos são obrigatórios e devem ser desenvolvidos para a entrega do teste

* **Posições dos veículos**: Exibir no mapa onde os veículos estavam na sua última atualização.

* **Linhas**: Exibir informações sobre as linhas de ônibus.

* **Paradas**: Exibir os pontos de parada da cidade no mapa.

* **Previsão de chegada**: Dado uma parada informar a previsão de chegada de cada veículo que passe pela parada selecionada.

* **Pesquisa e Filtros**: Permitir que o usuário pesquise e filtre esses dados, interagindo com a interface.

## O que é permitido

* Frameworks JavaScript (Vue, Angular, React, etc)

* Bibliotecas de componentes
  * **Vue**: Element-ui, Vuetify, Bootstrap Vue, Buefy, etc.
  * **Angular**: Material2, NGX Bootstrap, Onsen UI, etc
  * **React**: Ant-design, Rebass, React bootstrap, Material UI, etc

* Bibliotecas e APIs de Mapas (Leafletjs, Openlayers, Google Maps API, etc)

* Template engines (Pug, Ejs, etc)

* Frameworks CSS (Bulma, Bootstrap, Materialize, etc)

* Pré-processadores CSS (SCSS, SASS, LESS, etc)

* Qualquer tecnologia complementar as citadas anteriormente são permitidas desde que seu uso seja justificável

## O que não é permitido

* Utilizar componentes ou códigos de terceiros que implementem algum dos requisitos.

## Recomendações

* **Linter**: Desenvolva o projeto utilizando algum padrão de formatação de código, utilizando linters tanto para o JS como para o CSS.

## Extras

Aqui são listados algumas sugestões para você que quer ir além do desafio inicial. Lembrando que você não precisa se limitar a essas sugestões, se tiver pensado em outra funcionalidade que considera relevante ao escopo da aplicação fique à vontade para implementá-la.

* **Refresh automático**: Que as informações exibidas na aplicação sejam atualizadas de tempo em tempo de forma transparente ao usuário

* **Cálculo de rotas**: Exibir a possível rota de um ou mais ônibus em relação a uma parada (Utilizando API do Google Maps, Leaflet Routing Machine ou equivalentes)

* **Layout responsivo**: Adaptar o layout da aplicação à diferentes tipos de resoluções; otimizar a experiência mobile.

* **Corredores**: Mostrar informações sobre os corredores de ônibus de SP.

* **Velocidade das vias**: Mostrar informações sobre as velocidades das vias.

* **Testes**: Desenvolva testes que achar necessário para a aplicação.

* **Documentação**: Gerar uma documentação da aplicação. A documentação pode incluir detalhes sobre as decisões tomadas, especificação dos componentes desenvolvidos, instruções de uso dentre outras informações que achar relevantes.

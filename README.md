# Programa de estágio - 2021

O objetivo desta etapa é que você desenvolvedor implemente um dos testes listados a seguir, para que possamos avaliar seu conhecimento técnico em determinada área e a metodologia aplicada no desenvolvimento do teste.

Os testes não são restritos a uma tecnologia específica, o objetivo é que você consiga mostrar todo seu conhecimento e potencial como desenvolvedor utilizando as tecnologias que já sabe.

## Teste Front-end

Neste teste serão avaliados seus conhecimentos em HTML, CSS e JavaScript, a criatividade e metodologia aplicada no desenvolvimento, a usabilidade e design da aplicação final.

### O Desafio

Seu objetivo é criar um *dashboard* que exiba dados sobre o transporte público da cidade de São Paulo, consultando a [API **Olho Vivo**](api.md) que provê informações em tempo real do monitoramento da frota de ônibus da cidade de São Paulo.

### Requisitos

Esses requisitos são obrigatórios e devem ser desenvolvidos para a entrega do teste

* **Posições dos veículos**: Exibir no mapa onde os veículos estavam na sua última atualização.

* **Linhas**: Exibir informações sobre as linhas de ônibus.

* **Paradas**: Exibir os pontos de parada da cidade no mapa.

* **Previsão de chegada**: Dado uma parada informar a previsão de chegada de cada veículo que passe pela parada selecionada.

* **Pesquisa e Filtros**: Permitir que o usuário pesquise e filtre esses dados, interagindo com a interface.

## Aplicação Realizada

### Sobre a aplicação e suas funcionalidades

<div align = "center">
  <img src = "front-end/src/images/Logo.png">
</div>

- Foi construída com as tecnologias **React** (por meio do **Typescript**), **HTML**, **CSS** e **JavaScript**;

- Para seu funcionamento, foram feitas requisições da [API **Olho Vivo**](api.md);

- Na aplicação, o usuário tem acesso à *localização em tempo real dos ônibus*, às *paradas* e às *informações* de uma determinada linha. Além da *previsão de chegada do veículo mais próximo a uma parada*.

### Imagens

<div align = "center">
  <img src = "imagens-readme/Captura de tela de 2021-04-17 13-54-51.png">
</div>

<div align = "center">
  <img src = "imagens-readme/Captura de tela de 2021-04-17 13-55-05.png">
</div>

<div align = "center">
  <img src = "imagens-readme/Captura de tela de 2021-04-17 13-55-18.png">
</div>

<div align = "center">
  <img src = "imagens-readme/Captura de tela de 2021-04-17 13-55-30.png">
</div>
<div align = "center">
  <img src = "imagens-readme/Captura de tela de 2021-04-17 13-55-40.png">
</div>
<div align = "center">
  <img src = "imagens-readme/Captura de tela de 2021-04-17 13-55-46.png">
</div>
<div align = "center">
  <img src = "imagens-readme/Captura de tela de 2021-04-17 13-55-50.png">
</div>

### Vídeo de explicação

[Funcionamento da aplicação]()

### Rodando o código

- Para rodar o código na própria máquina, é necessário ter o yarn instalado. Deixo aqui uma sugestão de tutorial para a instalação dele: [Instalação do Yarn](https://www.hostinger.com.br/tutoriais/yarn-install)

- Depois da instalação do yarn, o usuário pode acessar a plataforma dando um `git-clone` no link do repositório

- Com o repositório clonado, o usuário deve entrar na pasta do projeto pelo terminal, utilizando o comando: `cd front-end` e adicionar o react para que não haja erros na hora de rodar a aplicação, com o comando: `yarn add react`

- E, por fim, para rodar a aplicação, ainda no terminal, o usuário escreve o comando: `yarn start` e a aplicação começa a funcionar no navegador padrão

### Final

Espero que tenham uma ótima experiência com a aplicação! :smile:

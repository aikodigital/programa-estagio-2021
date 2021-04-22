# Olho Vivo API

Aqui se encontram as instruções de execução dessa API a fim de testes:

## Dependências

* Para executar a api é necessária a instalação do node com o npm: https://nodejs.org/en/
* Também é necessário a conexão com um banco de dados postgres: https://www.postgresql.org/download/
* Clone o repositório: 
```
$ git clone https://github.com/murilogds/programa-estagio-2021
```
* Mude a branch:
```
$ git checkout teste/back-end/murilo
```

## Configuração do Banco de Dados
* Crie um banco de dados (local ou na nuvem) [Exemplo](https://www.prisma.io/dataguide/postgresql/create-and-delete-databases-and-tables#create-a-new-database)
* Crie um arquivo .env dentro da pasta back-end, fora da pasta src com a seguinte configuração:
```
PGHOST=seuhostaqui
PGUSER=seuuseraqui
PGPASSWORD=suasenhaaqui
PGPORT=suaportaaqui
PGDB=nomedoseubancoaqui
```
* Caso seu banco de dados seja local, o host padrão é localhost e a porta é 5432, caso não queira se dar o trabalho de criar um banco de dados local, pode configurar um grátis na nuvem facilmente através do [ElephantSQL](https://www.elephantsql.com/)

## Instalação e Execução do projeto
* Após configurar seu banco de dados, dentro da pasta back-end execute o seguinte comando para instalar as dependências:
```
$ npm install
```
* Para criar as tabelas no seu banco de dados execute o comando:
```
$ npm run db:create
```
* Para inserir valores a fim de exemplo na tabela execute:
```
$ npm run db:insert
```
* Com tudo configurado, resta só iniciar a API na sua máquina:
```
$ npm run start:dev
```
* Pronto, a API está rodando na sua máquina em http://localhost:3333

* Para ver a documentação da API e entender quais requisições podem ser feitas e como devem ser feitas, acesse:
https://olho-vivo-api-docs.vercel.app/

* **Caso queira deletar** as tabelas e os valores cadastrados nela por algum motivo execute(Obs: esse comando deleta todas as tabelas, caso queira testar a aplicação novamente execute o db:create novamente):
```
$ npm run db:drop
```

## Uso
Com a API rodada na sua máquina basta executar as requisições através de um rest client (Ex.: Insomnia, Postman, etc...).
Para ver a documentação da API acesse: https://olho-vivo-api-docs.vercel.app/

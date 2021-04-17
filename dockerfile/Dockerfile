FROM ubuntu:16.04
MAINTAINER berrytern@gmail.com
RUN apt update -y
RUN apt install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt install -y nodejs git
RUN mkdir server && cd server && git init && git remote add origin https://github.com/berrytern/programa-estagio-2021.git
RUN cd server && git fetch origin && git checkout -B master --track origin/teste/back-end/joao_pedro
CMD cd server && git fetch origin && git checkout -B master --track origin/teste/back-end/joao_pedro && npm install && npm start
EXPOSE 3000
EXPOSE 3001
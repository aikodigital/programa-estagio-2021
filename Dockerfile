FROM node

COPY . .

RUN npm install

RUN npx knex migrate:latest

EXPOSE 3333

CMD ["npm", "start"]
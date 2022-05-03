FROM node:10-alpine

WORKDIR /APP/Task-2

COPY package.json ./

RUN npm install

ENV ENV_NODE=production

COPY . ./

#USER node

EXPOSE 5000

CMD [ "node", "server.js" ]
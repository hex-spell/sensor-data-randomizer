FROM node:10-alpine

WORKDIR /home/node/app

COPY . .

RUN npm install

CMD [ "node", "src/index.js" ]
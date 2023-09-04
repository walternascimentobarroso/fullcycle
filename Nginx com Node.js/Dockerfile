FROM node:current-alpine

WORKDIR /usr/src/app

COPY ./src .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]

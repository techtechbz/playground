FROM node:latest

WORKDIR /app

COPY package.json yarn.lock tsconfig.json jest.config.js ./

RUN apt update && apt upgrade -y
RUN npm i -g npm
RUN yarn add -D typescript ts-node \
  jest ts-jest @types/jest
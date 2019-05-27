FROM node:8.16.0
WORKDIR /app
COPY package.json .
COPY . .
RUN npm install

RUN npm run webpack
CMD [ "npm", "start" ]
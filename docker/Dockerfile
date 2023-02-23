FROM node:18

WORKDIR /workspace
COPY package*.json ./
COPY src/* ./

RUN npm install
RUN npm install -g nodemon
COPY . .

CMD ["node","server.js"]
FROM node:18

WORKDIR /elevenLabs

COPY . ./

CMD ["node", "server.ts"]
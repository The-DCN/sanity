
FROM node:10.16-buster-slim

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["expo", "start"]

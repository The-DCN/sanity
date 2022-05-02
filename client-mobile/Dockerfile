#https://sonyarouje.com/2019/08/02/expo-react-native-development-in-docker/

FROM node:10.16-buster-slim
WORKDIR app

COPY ./package.json .
RUN npm install
COPY .
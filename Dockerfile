FROM node:8.9-alpine
WORKDIR /usr/src/app
COPY /dist/TodoApp /usr/src/app
RUN npm i -g http-server
EXPOSE 4200
CMD ["http-server","-p 4201"]

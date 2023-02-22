FROM node

WORKDIR /www

COPY ./ ./

RUN npm i

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
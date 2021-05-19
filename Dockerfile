FROM node:16-alpine3.11

RUN mkdir -p /memory

WORKDIR /memory

ENV PATH /memory/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "build"]
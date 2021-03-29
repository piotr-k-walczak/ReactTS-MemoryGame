# pull the base image
FROM node:ubuntu

# set the working direction
WORKDIR /memory

# add `/app/node_modules/.bin` to $PATH
ENV PATH /memory/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start &"]
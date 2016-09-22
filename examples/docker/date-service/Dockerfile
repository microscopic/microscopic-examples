FROM mhart/alpine-node

RUN apk update && apk add git

RUN mkdir /tmp/app

WORKDIR /tmp/app

COPY package.json index.js ./

RUN npm install

CMD node index.js

FROM node:24.4.1-alpine3.22

WORKDIR /code

CMD ["bin/run"]

ENV FORCE_COLOR='1'

RUN \
  apk add --no-cache nginx && \
  ln -fs /code/src/nginx.conf /etc/nginx/nginx.conf

COPY package.json ./
RUN \
  npm install && \
  npm cache clean --force

ENV NODE_OPTIONS='--import /code/src/hooks.js'

COPY bin bin
COPY docs docs
COPY src src

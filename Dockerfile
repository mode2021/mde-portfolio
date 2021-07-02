
FROM node:lts-alpine as base
#FROM rhel8/nodejs-12:latest as base

# for mozjpeg
run apk --update --no-cache add autoconf automake \
    libtool make tiff jpeg zlib zlib-dev pkgconf \
    nasm file gcc musl-dev

USER node

RUN mkdir /home/node/app && chown node:node /home/node/app

WORKDIR /home/node/app

ADD --chown=node:node package* .

RUN npm install
#RUN npm install node-sass --save-dev
#RUN npm install bulma --save-dev
#RUN npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp

# run apk del autoconf automake \
#     libtool make zlib-dev pkgconf \
#     gcc musl-dev

ADD --chown=node:node . .


FROM base as dev

#RUN chown -R node:node /home/node/app

ENV TERM=xterm-256color
ENV DEBUG_COLORS=true
ENV COLORTERM=truecolor

CMD ["npm", "start"]

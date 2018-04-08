FROM node:alpine
RUN apk --no-cache --update-cache add gcc python python-dev py-pip
RUN apk add vips-dev fftw-dev --update-cache --repository https://dl-3.alpinelinux.org/alpine/edge/testing/
RUN apk --no-cache add make g++
COPY . .
RUN yarn
CMD [ "node", "index.js" ]
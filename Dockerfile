FROM node:15.14.0-alpine3.13

ARG EMAIL
ENV EMAIL ${EMAIL}
ARG PASSWORD
ENV PASSWORD ${PASSWORD}

RUN npm install

CMD [ "node", "index.js", "-e", "${EMAIL}}", "-p", "${PASSWORD}"]
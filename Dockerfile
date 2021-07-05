FROM node:12.18.3
RUN yarn set version 1.22.10
COPY ./package.json .
RUN yarn install
CMD [ "yarn", "run","server" ]
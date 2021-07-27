FROM node:12.18.3
USER root
RUN cd /root
RUN apt-get update && apt-get install -y git-all
RUN git clone https://github.com/brag00n/bomber.git /root/bomber
WORKDIR /root/bomber
RUN yarn set version 1.22.10
RUN yarn install
CMD [ "yarn", "run","server" ]
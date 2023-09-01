FROM node:12.18.3
USER root
RUN cd /root
#Fix apt-get update failed to fetch debian amd64 packages
#cf https://unix.stackexchange.com/questions/743839/apt-get-update-failed-to-fetch-debian-amd64-packages-while-building-dockerfile-f
RUN echo "deb http://archive.debian.org/debian stretch main" > /etc/apt/sources.list
RUN apt-get update && apt-get install -y git-all
RUN git clone https://github.com/brag00n/bomber.git /root/bomber
WORKDIR /root/bomber
RUN yarn set version 1.22.10
RUN yarn install
CMD [ "yarn", "run","server" ]
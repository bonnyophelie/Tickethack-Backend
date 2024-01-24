FROM node:16.20.2-buster
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY . .
ARG url
ENV CONNECTION_STRING $url
USER node
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]
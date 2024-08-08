FROM node:10-alpine
RUN mkdir -p /src/node_modules && chown -R node:node /src
WORKDIR /src
COPY src/package*.json ./
USER node
RUN npm install
COPY --chown=node:node src/ /src
EXPOSE 8080
CMD [ "node", "app.js" ]
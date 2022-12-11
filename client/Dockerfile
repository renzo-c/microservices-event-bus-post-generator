FROM node:16-alpine

# Env variables added to avoid bugs 
# when running a create React app project in a Docker container
ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR  /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
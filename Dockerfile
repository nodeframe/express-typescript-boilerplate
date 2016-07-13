FROM node:argon

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install

# Bundle app source
COPY  .build /app/.build

EXPOSE 3000
CMD [ "npm", "start" ]
# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Make port 3001 available to the world outside this container
# This is the port your server listens on in server.js
EXPOSE 3001

# Define the command to run your app
CMD ["node", "server.js"]
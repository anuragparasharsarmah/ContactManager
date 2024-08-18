# Using official Node.js 20 Alpine image as the base
FROM node:20-alpine

# Setting the working directory
WORKDIR /app

# Copying the package.json and package-lock.json files
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying the rest of the application code
COPY . .

# Exposing the port the app runs on
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]
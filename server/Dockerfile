# Use a Node.js base image
FROM node:18-alpine

# Create and set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the server files
COPY . .

# Expose the port
EXPOSE 3001

# Start the server
CMD ["node","index.js"]

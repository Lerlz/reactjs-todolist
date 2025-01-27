# Use Node.js base image
FROM node:20

 # Use nginx to serve the built app
 FROM nginx:alpine

# Use the official Node.js image for building the frontend
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . ./

# Build the app (optional for production)
 RUN npm run build

# Copy the built app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port
EXPOSE 3000

# Start the application / # Start nginx to serve the React app
CMD ["npm", "start", "nginx", "-g", "daemon off;", "npx", "serve", "build"]

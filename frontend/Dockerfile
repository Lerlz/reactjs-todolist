# Use Node.js base image
<<<<<<< HEAD
=======
FROM node:20

 # Use nginx to serve the built app
 FROM nginx:alpine

# Use the official Node.js image for building the frontend
>>>>>>> d7fea6cad1da3b5c41bd4c3df851bb75ad99e790
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

<<<<<<< HEAD
# Copy package.json and package-lock.json (if available) and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use Node.js to serve the app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/build ./build

# Install `serve` to serve the built React app
RUN npm install -g serve

# Expose the port where the app will run
EXPOSE 3000

# Start the React app
CMD ["serve", "-s", "build", "-l", "3000"]
=======
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
>>>>>>> d7fea6cad1da3b5c41bd4c3df851bb75ad99e790

# Use Node.js base image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

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

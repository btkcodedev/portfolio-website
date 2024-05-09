# Use the official Node.js 16 image as base
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Start a new stage from the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install `next` globally (if not already installed)
RUN npm install -g next

# Expose the port Next.js app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV production

# Command to run the Next.js application
CMD ["npx", "serve@latest", "out"]

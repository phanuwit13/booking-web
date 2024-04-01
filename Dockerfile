# Stage 1: Building the code
FROM node:18-alpine as builder

# Install dotenv-cli
RUN npm install -g dotenv-cli

WORKDIR /app

# Copy the source code and environment file
COPY . .
COPY .env ./

RUN yarn

# Build the application
RUN yarn prisma generate
RUN yarn build:dev

# Stage 2: Run the Next.js app
FROM node:18-alpine as runner

WORKDIR /app

# Set the environment to development
ENV NODE_ENV dev

# Copy the necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env ./

# Install dotenv-cli
RUN npm install -g dotenv-cli

# Expose the port the app will run on
EXPOSE 8080

# Run the application using dotenv-cli with the specified environment file
CMD ["dotenv", "-e", ".env", "--", "yarn", "start"]
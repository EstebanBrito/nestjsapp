#### Using multistage builds to optimize container's size
## Build stage
FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

## Production Stage
FROM node:18-alpine

# What is this? ARG(env during build time), ENV (pass this to container)
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# Copy compiled code, deps and install deps
COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./
RUN npm install --only=production

# Delete package.json (no longer used after packages have been installed)
RUN rm package*.json

# Expose the port (what if I wanna change in prod?)
EXPOSE 3000

CMD ["node", "dist/main.js"]
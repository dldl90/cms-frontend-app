FROM hub.noths.com/node:8-alpine AS base

# Configure directory
WORKDIR /service
ADD . /service

# Install dependencies
RUN apk update && apk add git && \
  apk add --no-cache make gcc g++ python && \
  npm install --only=production

# Build application
RUN npm run build 

# Remove useless files
RUN find . -type f -name '*.log' -delete && \
    find . -type f -name '*.md' -delete && \
    find . -type f -name '*.txt' -delete

FROM hub.noths.com/node:8-alpine

# Configure directory, allowed user and port
WORKDIR /service
EXPOSE 8080

# Copy only necessary files

COPY --from=base --chown=user ["/service/node_modules", "./node_modules"]
COPY --from=base --chown=user ["/service/dist", "./dist"]
COPY --from=base --chown=user ["/service/src", "./src"]
COPY --from=base --chown=user ["/service/config", "./config"]
COPY --from=base --chown=user ["/service/server-production.js", "/service/.babelrc", "/service/package.json", "/service/postcss.config.js", "./"]

# Start application via external command

# Stage 1: Build and compile
FROM ubuntu:20.04 AS build

# Install build tools and dependencies
RUN apt-get update -qq && \
    apt-get install -y -qq \
    curl \
    gnupg \
    apt-transport-https \
    nodejs \
    npm \
    maven \
    docker.io \
    openjdk-17-jdk \
    && rm -rf /var/lib/apt/lists/*

# Install Snyk
RUN npm install -g snyk

# Prepare build environment (if needed)
# COPY your-source-code /your-source-path

# Stage 2: Runtime environment
FROM ubuntu:20.04

# Install only runtime dependencies
RUN apt-get update -qq && \
    apt-get install -y -qq \
    curl \
    docker.io \
    openjdk-17-jdk \
    && rm -rf /var/lib/apt/lists/*

# Copy necessary files from the build stage
COPY --from=build /usr/local/bin/snyk /usr/local/bin/snyk
COPY --from=build /usr/bin/mvn /usr/bin/mvn
COPY --from=build /usr/bin/node /usr/bin/node
COPY --from=build /usr/bin/npm /usr/bin/npm
COPY --from=build /usr/bin/docker /usr/bin/docker

# Set default command
CMD ["bash"]

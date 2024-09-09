FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/user-0.0.1-SNAPSHOT.jar /app/user-backend.jar

EXPOSE 8082

ENTRYPOINT ["java", "-jar", "/app/user-backend.jar"]


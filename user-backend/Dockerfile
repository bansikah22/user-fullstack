FROM openjdk:24-ea-oraclelinux8

WORKDIR /app

COPY target/user-1.1.0.jar /app/user-backend.jar

EXPOSE 8082

ENTRYPOINT ["java", "-jar", "/app/user-backend.jar"]


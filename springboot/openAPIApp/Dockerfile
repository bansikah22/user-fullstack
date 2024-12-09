FROM openjdk:24-ea-22-oraclelinux8 as builder


WORKDIR /app


COPY mvnw .
COPY .mvn .mvn


COPY pom.xml .
COPY src ./src

RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Second stage
FROM openjdk:24-ea-22-oraclelinux8


WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8082

ENTRYPOINT ["java", "-jar", "app.jar"]

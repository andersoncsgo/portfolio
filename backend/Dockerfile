FROM openjdk:17-jdk-slim


WORKDIR /app

COPY pom.xml /app/


RUN mvn dependency:go-offline


COPY src /app/src


RUN mvn clean package -DskipTests


CMD ["java", "-jar", "target/backend-1.0-SNAPSHOT.jar"]

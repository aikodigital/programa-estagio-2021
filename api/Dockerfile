FROM maven:3.6.3-jdk-11 AS MAVEN_BUILD
COPY pom.xml /build/
COPY src /build/src/
WORKDIR /build/
RUN mvn package -DskipTests

FROM openjdk:11-jre
WORKDIR /app
COPY --from=MAVEN_BUILD /build/target/api-0.0.1-SNAPSHOT.jar /app/
ENTRYPOINT ["java", "-jar", "api-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080

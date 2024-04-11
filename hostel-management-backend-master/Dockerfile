#FROM openjdk:8
#VOLUME /tmp
#EXPOSE 8090
#ADD /target/hostelPortal-0.0.1-SNAPSHOT.jar hostelPortal-0.0.1-SNAPSHOT.jar
#ENTRYPOINT ["java", "-jar", "hostelPortal-0.0.1-SNAPSHOT.jar"]
  
FROM openjdk:11
WORKDIR /app
COPY ./ ./
CMD ["java", "-jar", "target/hostelPortal-0.0.1-SNAPSHOT.jar"]

#FROM node:latest as node
#RUN mkdir -p /app
#WORKDIR /app
#COPY package*.json /app/
#RUN npm install 
#COPY . /app/
#EXPOSE 4200
#CMD ["npm", "run", "start"]






  
FROM node:alpine
WORKDIR /app 
COPY ./package*.json ./
RUN npm i
COPY . .
EXPOSE 4200
CMD ["npm", "run", "start"]

FROM node:14

COPY package*.json ./
COPY . .

RUN ["npm", "install"]

EXPOSE 3000

CMD ["npm", "start"]
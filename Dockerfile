FROM node:20-slim

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Bundle app source
COPY . .

# Cloud Run expects 8080
EXPOSE 8080

CMD ["npm", "start"]

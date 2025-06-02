FROM node:21-alpine
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
EXPOSE 4000
CMD ["node", "index.js"]

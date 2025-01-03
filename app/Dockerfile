FROM node:23-alpine3.20

WORKDIR ./node/

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "./dist/index.js"]







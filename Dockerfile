FROM node:20.5.1-alpine3.18


WORKDIR /app

COPY . .

RUN chown -R node:node /app && \
    chmod -R 755 /app/public

USER node
RUN npm install && \
    npm install sharp && \
    npm rebuild --arch=x64 --platform=linux --libc=musl sharp && \
    npm i @formatjs/intl-localematcher &&\
    npm i negotiator &&\
    npm install googleapis@105 @google-cloud/local-auth@2.1.0 --save &&\
    npm install react-icons &&\
    npx tailwindcss init -p && \
    npm run build

EXPOSE 3000

CMD ["npm", "start"]

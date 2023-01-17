FROM --platform=linux/amd64 node:16 
WORKDIR /app

COPY . .
run yarn

EXPOSE 3000
CMD yarn build && yarn preview


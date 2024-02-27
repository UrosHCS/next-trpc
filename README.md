# Next tRPC

## Setup

Install dependencies, create .env file, start docker, run migrations, start the microservice, start the app.

```
npm i
cp .env.example .env
docker compose up
npx prisma db push
node microservice
npm run dev
```

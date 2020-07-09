# Apollo + TypeScript + Azure + Prisma(v1) + MongoDB

Based on template (https://github.com/reflash/apollo-typescript-azure-template)

## Requirements

Install serverless cli
```bash
npm install -g serverless
```

To login to Azure (https://github.com/serverless/serverless-azure-functions#advanced-authentication)

Prisma (v1) requires Docker to be installed (https://docs.docker.com/get-docker/)

**Start Prisma server**
```bash
docker-compose up -d
```

**Stop Prisma server**
```bash
docker-compose stop
```

## Deploy locally

```bash
yarn start
```

## Deploy to Azure

```bash
yarn deploy
```

## NOTE

When GraphQL Playground starts, It won't have the correct URL containing the security code, and a message "Server cannot be reached" as shown at your browser.

We just need to put the full URL that includes the security code in the Playground url box. The background polling should refresh the screen momentarily. Click the Schema button to see if the docs are loaded correctly as the image below.

## Cleanup

```bash
sls remove
```

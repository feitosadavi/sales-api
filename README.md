# SALES API

A API Rest for Sales

## Techs
 - Node
 - Express
 - Typescript
 - TypeORM
 - Postgres
 - Jest
 - Docker

## Concepts
 - Clean Architecture
 - TDD.

## Requirements [without docker]
    - node v16 or higher
    - npm v8 or higher
    - postgres v14 or higher (running on 5432 PORT)
    
## Requirements [with docker]
    - docker v20 or higher
    - docker-composer v1.2 or higher

## Install [without docker]

    npm install && npm run migrations

## Run the app [dev]

    npm run dev

## Run the app [prod]

    npm run compile

## Run the tests

    npm run test
    
## Run the app [dev docker]

    docker-compose up -f docker-compose.dev.yml

## Run the app [prod docker]

    docker-compose up

# REST API

The API endpoints are descripted below.

## Get Product by Id

### Request

`GET /products/:id`

    curl -i -H 'Accept: application/json' http://localhost:3000/products/:id

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    access-control-allow-origin: *
    access-control-allow-methods: *
    access-control-allow-headers: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 14
    ETag: W/"e-EKE2LtPCPC0wMIbAIFTgOUR5FMc"
    Date: Tue, 19 Apr 2022 19:34:52 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    "product":{
        id: '',
        name: '',
        price: '',
        quantity: '',
        created_at: '',
        updated_at: ''
    }

`POST /products/create`

    curl -X POST -H "Content-Type: application/json" \
        -d '{
                "name": "Camisa", 
                "price": 50,
                "quantity": 3,    
            }' \
        http://localhost:3000/products/:id
### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    access-control-allow-origin: *
    access-control-allow-methods: *
    access-control-allow-headers: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 14
    ETag: W/"e-EKE2LtPCPC0wMIbAIFTgOUR5FMc"
    Date: Tue, 19 Apr 2022 19:34:52 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    "product":{
        "id": "58e9e089-0346-4917-b784-cb6c4be906e7",
        "name": "Camisa", 
        "price": 50,
        "quantity": 3,  
        "created_at": "Tue, 19 Apr 2022 19:34:52",
        "updated_at": "Tue, 19 Apr 2022 19:34:52"
    }

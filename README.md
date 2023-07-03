# Simple CRUD API README

## Start

1. Clone this [repo](https://github.com/agtugchik/simple-crud-api) localy
2. Change folder with `cd simple-crud-api`
3. Change branch with `git switch simple-crud-api`
4. Install dependencies with `npm i`

## Testing functionality

You can import my postman [configuration](https://api.postman.com/collections/22400415-f46daabd-7011-48e7-8b27-65035f3360ab?access_key=PMAT-01H4DYRQJMYZZSWXQWCGK92J97) to test server functionality.

## Commands

### Ddevelopment mode

Use `npm run start:dev` to start project in development mode with nodemon

### Productione mode

Use `npm run start:dev` to create production build and then start bundled project

### Tests

Use `npm run test` to start testing project

## .env

1. Create env file with `touch .env`
2. Add PORT and HOST here like:

```
HOST="127.0.0.1"
PORT=3000
```

3. Try to start app

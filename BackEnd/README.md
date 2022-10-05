# backend
Back-end repo for the Inbox Inventors!

Steps for running server
1. Install dependencies
2. Set up database through postgres
3. Update .env file with database info(no password by default):
    DB_HOST="localhost"
    DB_PORT="5432"
    DB_NAME="your_database's_name"
    DB_USER="your_computer's_name"
    DB_PASSWORD="" 
4. In terminal of backend directory, run this command:
    yarn run knex migrate:latest
5. In terminal of backend directory, run this command:
    yarn run knex seed:run
6. In terminal of backend directory, run this command:
    node app.js
7. Access through postman, webpage, etc.
# ballast-lane


# Requirements

- [NodeJS](https://nodejs.org/en/download/)
- [Postgres](https://www.postgresql.org/download/)
- [Firebase](https://console.firebase.google.com/)
- [Docker](https://www.docker.com)


# Run project

- clone repository ```git@github.com:IvanVilla1585/ballast-lane.git```
- next, ```cd ballast-lane```
- then install dependencies ```npm i```
- open other terminal and run ```docker-compose up```
- connect to postgres instance and create users table
   ```
    CREATE TABLE users (
	    id SERIAL PRIMARY KEY,
	    name VARCHAR(100) NOT NULL,
	    lastName VARCHAR(100),
	    email VARCHAR(60) NOT NULL UNIQUE,
	    password VARCHAR(150) NOT NULL
    )
  ```
- download service account file from firebase console
- move it to ```api/lib/firebase``` and rename it to ```serviceAccount.json```
- run ```npm start```

# Endpoints
- ```/auth/sign-up```
- ```/auth/login```
- ```/users/contacts```

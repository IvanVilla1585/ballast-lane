'use strict'

module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  jwtKey: process.env.JWT_KEY,
  mongoUrl: process.env.MONGO_URL,
  postgresHost: process.env.POSTGRES_HOST,
  postgresPort: process.env.POSTGRES_PORT,
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  firebaseDatabaseUrl: process.env.FIREBASE_DATABASE_URL,
  postgresDataBaseName: process.env.POSTGRES_DATABASE_NAME
}

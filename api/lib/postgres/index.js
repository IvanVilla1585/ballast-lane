'use strict'

const { Pool } = require('pg')

const config = require('../../config')

let connection

function createConnection () {
  if (!connection) {
    connection = new Pool({
      user: config.postgresUser,
      host: config.postgresHost,
      port: config.postgresPort,
      password: config.postgresPassword,
      database: config.postgresDataBaseName
    })
    console.log('postgres is running')
  }

  return connection
}

module.exports = createConnection

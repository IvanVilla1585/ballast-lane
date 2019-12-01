'use strict'

require('dotenv').config()
const restifyConfiguration = require('./api')
const config = require('./api/config')

const server = restifyConfiguration()

server.listen(config.port, () => console.log(`Server running at ${server.url}`))

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

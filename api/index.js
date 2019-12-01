'use strict'

const helmet = require('helmet')
const restify = require('restify')

const routesConfiguration = require('./routes')

module.exports = function restifyConfiguration () {
  const server = restify.createServer({
    name: 'ballast lane',
    version: '1.0.0'
  })

  server.use(restify.plugins.acceptParser(server.acceptable))
  server.use(restify.plugins.queryParser())
  server.use(restify.plugins.bodyParser())
  server.use(helmet())

  routesConfiguration(server)

  return server
}

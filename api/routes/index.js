'use strict'

const authRoutesConfiguration = require('./auth')
const userRoutesConfiguration = require('./user-contacts')

module.exports = function routesConfiguration (server) {
  authRoutesConfiguration(server)
  userRoutesConfiguration(server)
}

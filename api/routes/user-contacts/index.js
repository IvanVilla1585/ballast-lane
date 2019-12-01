'use strict'

const controller = require('./controller')
const schemas = require('../../schemas/contact/request')
const { validationSchema, validateToken } = require('../../middleware')

module.exports = function userRoutesConfiguration (server) {
  server.post(
    '/users/contacts',
    validateToken,
    validationSchema('body', schemas.userContact),
    controller.create
  )
}

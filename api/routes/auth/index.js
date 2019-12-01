'use strict'

const controller = require('./controller')
const schemas = require('../../schemas/auth/request')
const { validationSchema } = require('../../middleware')

module.exports = function authRoutesConfiguration (server) {
  server.post(
    '/auth/sign-up',
    validationSchema('body', schemas.signup),
    controller.signup
  )

  server.post(
    '/auth/login',
    validationSchema('body', schemas.signin),
    controller.signin
  )
}

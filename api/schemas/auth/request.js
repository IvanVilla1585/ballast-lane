'use strict'

const Joi = require('@hapi/joi')

const { user, login } = require('./data')

const signup = Joi.object().keys(user)
const signin = Joi.object().keys(login)

module.exports = {
  signin,
  signup
}

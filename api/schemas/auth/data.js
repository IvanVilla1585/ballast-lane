'use strict'

const Joi = require('@hapi/joi')

const user = {
  name: Joi.string().required(),
  lastName: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{8,25}$/).required()
}

const login = {
  email: Joi.string().email().required(),
  password: Joi.string().required()
}

module.exports = {
  user,
  login
}

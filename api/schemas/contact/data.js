'use strict'

const Joi = require('@hapi/joi')

const contact = {
  name: Joi.string().required(),
  lastName: Joi.string().default(''),
  phoneNumber: Joi.string().required(),
  userId: Joi.number().integer().positive().required(),
  type: Joi.string().regex(/^(MOVIL|HOME)*$/).default('')
}

module.exports = {
  contact
}

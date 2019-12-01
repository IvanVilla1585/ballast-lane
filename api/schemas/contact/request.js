'use strict'

const Joi = require('@hapi/joi')

const { contact } = require('./data')

const userContact = Joi.object().keys(contact)

module.exports = {
  userContact
}

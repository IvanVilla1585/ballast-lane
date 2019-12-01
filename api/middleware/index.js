'use strict'

const jwt = require('jsonwebtoken')
const errors = require('restify-errors')

const config = require('../config')

function validationSchema (prop, schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[prop])
    if (error || !value) {
      return next(new errors.BadRequestError(error || 'Invalid data'))
    }
    next()
  }
}

async function validateToken (req, res, next) {
  const { authorization } = req.headers

  if (!authorization) {
    return next(new errors.UnauthorizedError('Unauthorize'))
  }

  if (!authorization.startsWith('Bearer ')) {
    return next(new errors.UnauthorizedError('Unauthorize'))
  }

  const split = authorization.split(' ')

  if (split.length !== 2) {
    return next(new errors.UnauthorizedError('Unauthorize'))
  }

  const token = split[1]

  try {
    await jwt.verify(token, config.jwtKey)
  } catch (err) {
    console.error(err)
    return next(new errors.UnauthorizedError('Unauthorize'))
  }
  next()
}

module.exports = {
  validateToken,
  validationSchema
}

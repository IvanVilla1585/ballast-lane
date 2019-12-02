'use strict'

const errors = require('restify-errors')

const service = require('./service')

async function create (req, res, next) {
  try {
    const result = await service.create(req.body)
    res.status(201)
    res.send(result)
    next()
  } catch (err) {
    next(new errors.InternalServerError('Internal server error'))
  }
}

module.exports = {
  create
}

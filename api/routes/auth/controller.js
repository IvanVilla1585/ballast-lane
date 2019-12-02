'use strict'

const errors = require('restify-errors')

const service = require('./service')

async function signup (req, res, next) {
  try {
    const result = await service.signup(req.body)
    res.status(201)
    res.send(result)
    next()
  } catch (err) {
    next(new errors.InternalServerError('Internal server error'))
  }
}

async function signin (req, res, next) {
  try {
    const result = await service.signin(req.body)
    res.send(result)
    next()
  } catch (err) {
    let error = new errors.InternalServerError('Internal server error')
    if (err.body && err.body.code) {
      error = err
    }
    next(error)
  }
}

module.exports = {
  signin,
  signup
}

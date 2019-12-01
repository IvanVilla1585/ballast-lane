'use stict'

const bcrypt = require('bcrypt')
const errors = require('restify-errors')
const jwt = require('jsonwebtoken')

const config = require('../../config')
const authRepository = require('../../repositories/Auth')

const ROUNDS = 10

async function signup (data) {
  const hash = await bcrypt.hash(data.password, ROUNDS)

  data.password = hash

  const result = await authRepository.create(data)

  const [{ password, ...user }] = result.rows

  return user
}

async function signin ({ email, password: currentPassword }) {
  const result = await authRepository.getUserByEmail(email)

  const user = result.rows.length ? result.rows[0] : null

  if (!user) {
    throw new errors.NotFoundError('Not found')
  }

  const compare = await bcrypt.compare(currentPassword, user.password)

  if (!compare) {
    throw new errors.NotFoundError('Not found')
  }

  const { password, ...response } = user

  const token = await jwt.sign({ sub: response.id, name: response.name }, config.jwtKey, { expiresIn: '1h' })

  return { token, user: response }
}

module.exports = {
  signin,
  signup
}

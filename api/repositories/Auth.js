'use strict'

const getConnection = require('../lib/postgres')

class AuthRepository {
  constructor () {
    this.db = getConnection()
  }

  getUserByEmail (email) {
    const sql = 'SELECT id, name, lastName, email, password FROM users WHERE email = $1'
    const values = [email]
    return this.db.query(sql, values)
  }

  create ({ name, lastName, email, password }) {
    const sql = 'INSERT INTO users (name, lastName, email, password) VALUES($1, $2, $3, $4) RETURNING *'
    const values = [name, lastName, email, password]
    return this.db.query(sql, values)
  }
}

const authRepository = new AuthRepository()

module.exports = authRepository

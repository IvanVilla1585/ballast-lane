'use strict'

const { getFirestoreRef } = require('../lib/firebase')

const firestore = getFirestoreRef()

class UserContactRepository {
  constructor () {
    this.db = firestore.collection('contacts')
  }

  create (data) {
    return this.db.add(data)
  }
}

const userContactRepository = new UserContactRepository()

module.exports = userContactRepository

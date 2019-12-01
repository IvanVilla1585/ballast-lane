'use stict'

const userContactsRepository = require('../../repositories/UserContact')

async function create (data) {
  const response = await userContactsRepository.create(data)

  return { ...data, id: response.id }
}

module.exports = {
  create
}

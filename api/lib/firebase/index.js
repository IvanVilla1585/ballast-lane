'use strict'

const firebase = require('firebase-admin')

const config = require('../../config')
const serviceAccount = require('./serviceAccount.json')

let firestore
let firebaseInstance

function firebaseInitialize () {
  if (!firebaseInstance) {
    firebaseInstance = firebase.initializeApp({
      credential: firebase.credential.cert(serviceAccount),
      databaseURL: config.firebaseDatabaseUrl
    })
  }

  return firebaseInstance
}

function getFirestoreRef () {
  const instance = firebaseInitialize()
  if (!firestore) {
    firestore = instance.firestore()
    firestore.settings({ timestampsInSnapshots: true })
  }

  return firestore
}

module.exports = {
  firebaseInitialize,
  getFirestoreRef
}

import 'firebase/database'

import firebase from 'firebase/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
}

firebase.initializeApp(config)
// const databaseRef = firebase.database().ref()
export const todosRef = firebase.database().ref().child('todos')
export default firebase

import firebase from 'firebase/app'
import 'firebase/firestore'


firebase.initializeApp({
    apiKey: "AIzaSyBa9qowzU-BdFKO4XY5apMpF3MepAkCse4",
    authDomain: "todo-b2564.firebaseapp.com",
    databaseURL: "https://todo-b2564-default-rtdb.firebaseio.com",
    projectId: "todo-b2564",
    storageBucket: "todo-b2564.appspot.com",
    messagingSenderId: "100826759570",
    appId: "1:100826759570:web:d5ecfd02071d218172814b",
    measurementId: "G-N9DKNZE1F6"
  })
const db = firebase.firestore()

export default db
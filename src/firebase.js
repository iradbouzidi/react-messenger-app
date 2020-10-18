import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2TK80CSqbWtJ49xbypYdjyAyYYkZ_g7I",
  authDomain: "react-messenger-app-d200c.firebaseapp.com",
  databaseURL: "https://react-messenger-app-d200c.firebaseio.com",
  projectId: "react-messenger-app-d200c",
  storageBucket: "react-messenger-app-d200c.appspot.com",
  messagingSenderId: "327069073096",
  appId: "1:327069073096:web:3741bfa3b66cb649c9affd",
  measurementId: "G-KY8XWW4DP8",
});

const db = firebaseApp.firestore()

export default db

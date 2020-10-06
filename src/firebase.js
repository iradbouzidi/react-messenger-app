import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCOox1YWDxm1Bbm9eoMUKdxkqTgBi9Ue-U",
    authDomain: "facebook-messenger-clone-irad.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-irad.firebaseio.com",
    projectId: "facebook-messenger-clone-irad",
    storageBucket: "facebook-messenger-clone-irad.appspot.com",
    messagingSenderId: "448504899706",
    appId: "1:448504899706:web:5c913462ae48035537b3c3",
    measurementId: "G-1PCWR83P1M"
})

const db = firebaseApp.firestore()

export default db

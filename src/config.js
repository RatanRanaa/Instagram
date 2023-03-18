// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCEXPMDrBvcJSg0P3xyjArypgXjva4tRqM",
    authDomain: "insta-cd557.firebaseapp.com",
    projectId: "insta-cd557",
    storageBucket: "insta-cd557.appspot.com",
    messagingSenderId: "476729260955",
    appId: "1:476729260955:web:9843374f9ef226e5bcbf3e",
    measurementId: "G-N3F1JHQ07M"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage()

  export {db, auth, storage}
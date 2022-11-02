import "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl-O08OjHFuEUkikaHuoziEQVw3tBQ95A",
  authDomain: "clone-3dbfe.firebaseapp.com",
  projectId: "clone-3dbfe",
  storageBucket: "clone-3dbfe.appspot.com",
  messagingSenderId: "757623419793",
  appId: "1:757623419793:web:3603a00f2a4cf6b1c1a030",
  measurementId: "G-0XKW7JBWWV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

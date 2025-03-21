import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzGelhXTgBCIUdNpO8oRSXfEvubrOWm1w",
  authDomain: "clone-d1cf1.firebaseapp.com",
  projectId: "clone-d1cf1",
  storageBucket: "clone-d1cf1.firebasestorage.app",
  messagingSenderId: "564466932209",
  appId: "1:564466932209:web:fbcb11039c0bc90ee58c50",
  measurementId: "G-PN2261KGD4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


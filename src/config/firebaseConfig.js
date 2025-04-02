import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendSignInLinkToEmail, isSignInWithEmailLink, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNZ5guoPrydoZrc0irYQ_Z3xST12S8upA",
  authDomain: "ai-solutions-3fb1c.firebaseapp.com",
  projectId: "ai-solutions-3fb1c",
  storageBucket: "ai-solutions-3fb1c.firebasestorage.app",
  messagingSenderId: "694319596372",
  appId: "1:694319596372:web:ddd8f03c6e8a1d6d6a3ec1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in", user);
  } else {
    // User is signed out
    console.log("No user is signed in");
  }
});

export { db, collection, addDoc, getDocs, deleteDoc, doc, auth };

// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAeY_vDhFL1-VI6NM1cbPvnySNAmRK5A9U",
  authDomain: "project-cs313-361.firebaseapp.com",
  databaseURL:
    "https://project-cs313-361-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-cs313-361",
  storageBucket: "project-cs313-361.appspot.com",
  messagingSenderId: "982935900599",
  appId: "1:982935900599:web:e06650e5674a2f11ae1832",
  measurementId: "G-KZSP1LCYNX",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

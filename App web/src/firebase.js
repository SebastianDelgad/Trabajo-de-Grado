import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'




const firebaseConfig = {
  apiKey: "AIzaSyDzii7kgYbU_hwOVVJbzWwAAKkMOCGMCpw",
  authDomain: "teacher-qualifier.firebaseapp.com",
  databaseURL: "https://teacher-qualifier-default-rtdb.firebaseio.com",
  projectId: "teacher-qualifier",
  storageBucket: "teacher-qualifier.appspot.com",
  messagingSenderId: "27392235985",
  appId: "1:27392235985:web:57d22dfc092559e9dc28f0",
  measurementId: "G-N21QDNDBJC"
};



firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth}
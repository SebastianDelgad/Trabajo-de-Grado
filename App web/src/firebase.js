import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyDzii7kgYbU_hwOVVJbzWwAAKkMOCGMCpw",
  authDomain: "teacher-qualifier.firebaseapp.com",
  projectId: "teacher-qualifier",
  storageBucket: "teacher-qualifier.appspot.com",
  messagingSenderId: "27392235985",
  appId: "1:27392235985:web:57d22dfc092559e9dc28f0",
  measurementId: "G-N21QDNDBJC"
};


app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {db, auth}
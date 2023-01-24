// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzZ1OnFBf9RteYI8ha-TnxhlInbE9w1h4",
    authDomain: "money-tracker-1ed44.firebaseapp.com",
    projectId: "money-tracker-1ed44",
    storageBucket: "money-tracker-1ed44.appspot.com",
    messagingSenderId: "315155896293",
    appId: "1:315155896293:web:e1e9cc46fe3017972a010c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Data base
const db = getFirestore(app)

// auth 

const auth = getAuth(app)

export { db, auth }




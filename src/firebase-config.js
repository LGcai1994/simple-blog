// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAZ3dkhR-IlTJchP10Gnuiuxw_RcqQT98",
    authDomain: "simpleblog-409c3.firebaseapp.com",
    projectId: "simpleblog-409c3",
    storageBucket: "simpleblog-409c3.appspot.com",
    messagingSenderId: "11943093407",
    appId: "1:11943093407:web:f99c3fdca9f25be87deeaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
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
    apiKey: "AIzaSyAJUJSh_brWM3ziQo5ftkc_8t3rtwI3Ryw",
    authDomain: "simple-4d2f0.firebaseapp.com",
    projectId: "simple-4d2f0",
    storageBucket: "simple-4d2f0.appspot.com",
    messagingSenderId: "134616652979",
    appId: "1:134616652979:web:0768704d3cb5e0cd3024c6",
    measurementId: "G-9B7Y62K7CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
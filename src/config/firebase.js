
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getauth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHL6GfDuYdiOj1t9KYRgETJmPmJ1VMCpQ",
  authDomain: "react-firebase-13926.firebaseapp.com",
  projectId: "react-firebase-13926",
  storageBucket: "react-firebase-13926.appspot.com",
  messagingSenderId: "502810231143",
  appId: "1:502810231143:web:92a032b24e0d815c196fc2",
  measurementId: "G-YC1EKB7SPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
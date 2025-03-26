// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpwZ9wh2NvussQvwUZKfbgzaGW-xzclWE",
  authDomain: "react-projects-14a98.firebaseapp.com",
  projectId: "react-projects-14a98",
  storageBucket: "react-projects-14a98.firebasestorage.app",
  messagingSenderId: "50204158003",
  appId: "1:50204158003:web:cd57ce99e430ecbe845b46",
  measurementId: "G-7SFW5GSRVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


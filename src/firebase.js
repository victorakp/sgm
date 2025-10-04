// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB711srnZeUJmWieKLk-zOhxDgjl8818Cs",
  authDomain: "sgm-leadership.firebaseapp.com",
  projectId: "sgm-leadership",
  storageBucket: "sgm-leadership.firebasestorage.app",
  messagingSenderId: "392257060871",
  appId: "1:392257060871:web:c5a96a3e2730f7d6ad2aa2",
  measurementId: "G-5ZCM0C2C90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
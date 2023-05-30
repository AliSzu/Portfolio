// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpz5AofK4Odpmk5DDsZTIrvUI3a95efYU",
  authDomain: "portfolio-4ba1a.firebaseapp.com",
  projectId: "portfolio-4ba1a",
  storageBucket: "portfolio-4ba1a.appspot.com",
  messagingSenderId: "387323336795",
  appId: "1:387323336795:web:5d874fb36db3e51c84477e",
  measurementId: "G-Z7C7GHPTPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
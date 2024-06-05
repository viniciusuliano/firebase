import {getFirestore} from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFM-FbgAm6kAhOT5CFtOjTi9nPWrd36xs",
  authDomain: "curso-d3e1e.firebaseapp.com",
  projectId: "curso-d3e1e",
  storageBucket: "curso-d3e1e.appspot.com",
  messagingSenderId: "73475336443",
  appId: "1:73475336443:web:341ea11921d20015cce85e",
  measurementId: "G-R52WB4VS27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}; //Exportando para outro arquivo nosso banco de dados
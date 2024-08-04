// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqFF4zNkzwhJluRxRHSIdE3uIwTZgb9FU",
  authDomain: "pathway-travel.firebaseapp.com",
  projectId: "pathway-travel",
  storageBucket: "pathway-travel.appspot.com",
  messagingSenderId: "83362022354",
  appId: "1:83362022354:web:d63f3d01e840edcf383e0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
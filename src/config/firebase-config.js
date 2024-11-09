// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "fortunefinances-44a66.firebaseapp.com",
  projectId: "fortunefinances-44a66",
  storageBucket: "fortunefinances-44a66.firebasestorage.app",
  messagingSenderId: "947130496579",
  appId: "1:947130496579:web:5609cfaad6fc68640986f6",
  measurementId: "G-P46769PGE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const db = getFirestore(app);
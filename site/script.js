
// ====== FIREBASE RADICAL ======

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACAoFqsQeI-jkmOlZvYOO6R8pcJP0zBMY",
  authDomain: "olmpuz-5d352.firebaseapp.com",
  projectId: "olmpuz-5d352",
  storageBucket: "olmpuz-5d352.firebasestorage.app",
  messagingSenderId: "560128824573",
  appId: "1:560128824573:web:dfbc155ec83016404d1a94",
  measurementId: "G-1L2CJJJ1TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
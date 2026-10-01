// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVMCEE3NaFdMGkMmkoXDPAc8x4yr-JqeA",
  authDomain: "fir-practice-b8756.firebaseapp.com",
  projectId: "fir-practice-b8756",
  storageBucket: "fir-practice-b8756.firebasestorage.app",
  messagingSenderId: "441281764282",
  appId: "1:441281764282:web:fa8bf4e4364ab289465b83",
  measurementId: "G-BGKENKZLR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
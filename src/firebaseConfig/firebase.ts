// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shipnetic-64af4.firebaseapp.com",
  projectId: "shipnetic-64af4",
  storageBucket: "shipnetic-64af4.firebasestorage.app",
  messagingSenderId: "892304675233",
  appId: "1:892304675233:web:22f31b8c334feda8557be0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "online-shoping-bd5b7.firebaseapp.com",
  projectId: "online-shoping-bd5b7",
  storageBucket: "online-shoping-bd5b7.appspot.com",
  messagingSenderId: "722020092750",
  appId: "1:722020092750:web:07a1ee2c7c259dec932c1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
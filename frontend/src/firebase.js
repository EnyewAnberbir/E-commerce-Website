// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "e-commerce-website-c77af.firebaseapp.com",
  projectId: "e-commerce-website-c77af",
  storageBucket: "e-commerce-website-c77af.appspot.com",
  messagingSenderId: "768755986030",
  appId: "1:768755986030:web:0444cbe65be35172bfc07f",
  measurementId: "G-FX0QBLGG2P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
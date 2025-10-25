// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyDUvrwPLbRBwz008Odotpo8-m6OtKyuHwk",
   authDomain: "resume-builder-cfc23.firebaseapp.com",
   projectId: "resume-builder-cfc23",
   storageBucket: "resume-builder-cfc23.firebasestorage.app",
   messagingSenderId: "197320578377",
   appId: "1:197320578377:web:6e4f51fc6748ae52c73698",
   measurementId: "G-PN59XJXD8W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
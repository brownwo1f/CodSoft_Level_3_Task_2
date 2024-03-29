// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIRE_API,
  authDomain: "codprojects-6a82a.firebaseapp.com",
  projectId: "codprojects-6a82a",
  storageBucket: "codprojects-6a82a.appspot.com",
  messagingSenderId: "4246488684",
  appId: "1:4246488684:web:72496befb3304a0a5f3a49",
  measurementId: "G-E8J5SRMDQ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

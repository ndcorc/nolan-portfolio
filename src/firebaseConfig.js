// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4ipuTrVhnZvAGehBXfY6FLgmW4PrnC2k",
  authDomain: "nolan-portfolio.firebaseapp.com",
  projectId: "nolan-portfolio",
  storageBucket: "nolan-portfolio.appspot.com",
  messagingSenderId: "355601726935",
  appId: "1:355601726935:web:8d819beefcbc21e4239f92",
  measurementId: "G-4SXZPFW7LD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics, firebaseConfig };

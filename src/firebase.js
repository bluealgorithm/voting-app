// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE8P9DL2aRNOqFuCqDsXUsViU4q7o2NOU",
  authDomain: "blue-voting-app.firebaseapp.com",
  projectId: "blue-voting-app",
  storageBucket: "blue-voting-app.appspot.com",
  messagingSenderId: "308069546940",
  appId: "1:308069546940:web:49b3a139a9f072115149b9",
  measurementId: "G-2K5G0LB5P7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

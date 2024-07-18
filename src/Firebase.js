// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh0_Ztzl8S4e42KnNwUYtly9UCxYsje60",
  authDomain: "verduras-6399c.firebaseapp.com",
  projectId: "verduras-6399c",
  storageBucket: "verduras-6399c.appspot.com",
  messagingSenderId: "376067296944",
  appId: "1:376067296944:web:7e653c5313df27b2a03575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
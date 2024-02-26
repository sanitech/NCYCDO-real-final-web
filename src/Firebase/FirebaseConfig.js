// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnAVH5PTSo82w8WM8_syN44G-B9uW1amE",
  authDomain: "ncycdo-62b20.firebaseapp.com",
  projectId: "ncycdo-62b20",
  storageBucket: "ncycdo-62b20.appspot.com",
  messagingSenderId: "494750565107",
  appId: "1:494750565107:web:e0c4f55d3f1dc2e80bad86",
  measurementId: "G-B78D5X294Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = 'it';

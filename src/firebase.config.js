// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPFOZKbs9-ADUbevgpPSPjetAeukzhp4s",
  authDomain: "mini-job-portal.firebaseapp.com",
  projectId: "mini-job-portal",
  storageBucket: "mini-job-portal.firebasestorage.app",
  messagingSenderId: "1087065181771",
  appId: "1:1087065181771:web:fcfd161c9f0e74324887ce",
  measurementId: "G-XFSFGCL1JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
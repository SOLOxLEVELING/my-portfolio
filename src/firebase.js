// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzLnEGUB6WjxBrWnsAyFSg6a0zxYNqxPo",
  authDomain: "my-portfolio-21fb6.firebaseapp.com",
  projectId: "my-portfolio-21fb6",
  storageBucket: "my-portfolio-21fb6.firebasestorage.app",
  messagingSenderId: "830435595763",
  appId: "1:830435595763:web:e74400e52df7903863ae86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app);

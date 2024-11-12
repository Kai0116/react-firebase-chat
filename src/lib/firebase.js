import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyAmmcVl6HJj525QfUweJzsFxOGl2QcBGNc",
  authDomain: "reactchat-a2243.firebaseapp.com",
  projectId: "reactchat-a2243",
  storageBucket: "reactchat-a2243.firebasestorage.app",
  messagingSenderId: "1043009144090",
  appId: "1:1043009144090:web:ca8ab8c33d5bd5f7ed58a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

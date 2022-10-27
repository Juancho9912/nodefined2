// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwzwVKm3AWzL66yLZhth7IOErT8kC98SA",
  authDomain: "no-definido-43d52.firebaseapp.com",
  projectId: "no-definido-43d52",
  storageBucket: "no-definido-43d52.appspot.com",
  messagingSenderId: "441526265911",
  appId: "1:441526265911:web:febca29e831899fb1377b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
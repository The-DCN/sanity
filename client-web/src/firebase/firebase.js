// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5OzWjlsKUvmjQwLvjRbxbcMmBOpkLIQk",
  authDomain: "dream-notes-dddd5.firebaseapp.com",
  projectId: "dream-notes-dddd5",
  storageBucket: "dream-notes-dddd5.appspot.com",
  messagingSenderId: "533418006856",
  appId: "1:533418006856:web:d4af6c6b74830c51683b7d",
  measurementId: "G-EFBX86M2XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {
    db
};
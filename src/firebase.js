// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHoT0qay6rrTPe6APFWk528JWSKv9JrYM",
  authDomain: "todo-zydane.firebaseapp.com",
  projectId: "todo-zydane",
  storageBucket: "todo-zydane.appspot.com",
  messagingSenderId: "367830739632",
  appId: "1:367830739632:web:611ea615d2b7c0a2972975",
  measurementId: "G-Q9DQKVF9E3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

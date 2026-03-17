// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Auth import;
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkNOQ6zBiyueOjEdFnfhT4aYNWJBLzWNo",
  authDomain: "first-firebase-2e20a.firebaseapp.com",
  projectId: "first-firebase-2e20a",
  storageBucket: "first-firebase-2e20a.firebasestorage.app",
  messagingSenderId: "265334710860",
  appId: "1:265334710860:web:bc14f1761908ce1ff74ae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
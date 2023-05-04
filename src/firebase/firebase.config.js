// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPoO8AMJP2vDpJmuOFiNeFWyZb5szUo-Y",
  authDomain: "chef-recipe-hunter-e4e58.firebaseapp.com",
  projectId: "chef-recipe-hunter-e4e58",
  storageBucket: "chef-recipe-hunter-e4e58.appspot.com",
  messagingSenderId: "270370187242",
  appId: "1:270370187242:web:e13507a9881a62c2e1b493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
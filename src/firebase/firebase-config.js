// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "chocon-ticket.firebaseapp.com",
  projectId: "chocon-ticket",
  storageBucket: "chocon-ticket.appspot.com",
  messagingSenderId: "623539755242",
  appId: "1:623539755242:web:39811fb51a9e44825b1f93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

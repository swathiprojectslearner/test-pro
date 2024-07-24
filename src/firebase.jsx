// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS3GmBH6LUUJRYJrhDQ4pb2VOXlIR4U0A",
  authDomain: "projectslearnorg.firebaseapp.com",
  projectId: "projectslearnorg",
  storageBucket: "projectslearnorg.appspot.com",
  messagingSenderId: "891566562986",
  appId: "1:891566562986:web:cb98b971a8e95988f57ad3",
  measurementId: "G-7WCHRLT51L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Realtime Database and get a reference to the service
const database = getDatabase(app);

export { auth, database };

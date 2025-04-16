import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCT6UuXtZQA4sBIbLiHXSHxH4PGb80BffQ",
  authDomain: "final-project-9186f.firebaseapp.com",
  databaseURL:
    "https://final-project-9186f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-project-9186f",
  storageBucket: "final-project-9186f.firebasestorage.app",
  messagingSenderId: "498781553232",
  appId: "1:498781553232:web:996dfb50d1562854b94755",
  measurementId: "G-S0P3TYX0JR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };

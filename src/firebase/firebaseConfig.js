import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  databaseURL:
    "https://final-project-e9de3-default-rtdb.europe-west1.firebasedatabase.app/",
  apiKey: "AIzaSyAkyZU4JbwqUfMMPGlRZaSBESdFYpx6l5w",
  authDomain: "final-project-e9de3.firebaseapp.com",
  projectId: "final-project-e9de3",
  storageBucket: "final-project-e9de3.firebasestorage.app",
  messagingSenderId: "55300287452",
  appId: "1:55300287452:web:fab81ad79d531b71383d19",
  measurementId: "G-FTHWQPSB61",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };

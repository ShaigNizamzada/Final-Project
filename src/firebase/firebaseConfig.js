import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC09V861GXwwgmntPx3vKd_rwuz1FzaEWo",
  authDomain: "final-project-2a9dc.firebaseapp.com",
  databaseURL:
    "https://final-project-2a9dc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-project-2a9dc",
  storageBucket: "final-project-2a9dc.appspot.com",
  messagingSenderId: "613256283105",
  appId: "1:613256283105:web:8c889cce434dad173248a0",
  measurementId: "G-VSG5BQ3VLQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };

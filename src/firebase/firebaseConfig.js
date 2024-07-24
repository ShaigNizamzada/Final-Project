import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCxa8ad1bA322wniJUKH0Xl-fsMyBTBDeg",
  authDomain: "final-project-8cad6.firebaseapp.com",
  databaseURL:
    "https://final-project-8cad6-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "final-project-8cad6",
  storageBucket: "final-project-8cad6.appspot.com",
  messagingSenderId: "195287363309",
  appId: "1:195287363309:web:15423103e3fbb67bd666e4",
  measurementId: "G-JTM4GNCCDL",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };

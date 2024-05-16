import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAVXHPTlfMBaax89OiKa646E3gmS9BsqDE",
  authDomain: "final-project-4c0fb.firebaseapp.com",
  databaseURL:
    "https://final-project-4c0fb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-project-4c0fb",
  storageBucket: "final-project-4c0fb.appspot.com",
  messagingSenderId: "735993569271",
  appId: "1:735993569271:web:7be1f6a32f518e096858f2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };

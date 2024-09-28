import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  databaseURL:
    "https://final-project3-d2970-default-rtdb.europe-west1.firebasedatabase.app/",
  apiKey: "AIzaSyDtnTGyIGgGmWNNbTeB9scSBZbPISVpnUs",
  authDomain: "final-project3-d2970.firebaseapp.com",
  projectId: "final-project3-d2970",
  storageBucket: "final-project3-d2970.appspot.com",
  messagingSenderId: "946192982347",
  appId: "1:946192982347:web:631aba5832906cc1b7c8ce",
  measurementId: "G-K3C1BG8177",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };

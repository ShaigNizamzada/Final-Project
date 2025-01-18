import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  databaseURL:
    "https://finall-d81c8-default-rtdb.europe-west1.firebasedatabase.app/",
  apiKey: "AIzaSyC-6d0DcSQnm_Ps-4nYrE8nKbeoVIGv8xc",
  authDomain: "finall-d81c8.firebaseapp.com",
  projectId: "finall-d81c8",
  storageBucket: "finall-d81c8.firebasestorage.app",
  messagingSenderId: "1098238484378",
  appId: "1:1098238484378:web:92c5589fde87760f71e423",
  measurementId: "G-CW0QJMQJ4N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };

import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD8P24Y4ojPXhwpi5f06y81rXSUdcfgeAI",
  authDomain: "final-project2-354dd.firebaseapp.com",
  databaseURL:
    "https://final-project2-354dd-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "final-project2-354dd",
  storageBucket: "final-project2-354dd.appspot.com",
  messagingSenderId: "88987211722",
  appId: "1:88987211722:web:3c806868e549f46321a133",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };

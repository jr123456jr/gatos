import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP9psaEzEOTJCwo2JK-NAsz7cE1fXQ-vA",
  authDomain: "cats-project-3c373.firebaseapp.com",
  projectId: "cats-project-3c373",
  storageBucket: "cats-project-3c373.appspot.com",
  messagingSenderId: "832159113860",
  appId: "1:832159113860:web:388ab3af76f78b61a5d8d1"
};

firebase.initializeApp(firebaseConfig);
export { firebase };
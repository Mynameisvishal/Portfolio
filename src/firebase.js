import firebase from "firebase/app";
// import  * as firebaseF from "firebase";
import "firebase/database";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAWFSQFV9MwdDYm8UCgPa152VBs25hiMkI",
  authDomain: "vishalportfolio98.firebaseapp.com",
  databaseURL: "https://vishalportfolio98-default-rtdb.firebaseio.com",
  projectId: "vishalportfolio98",
  storageBucket: "vishalportfolio98.appspot.com",
  messagingSenderId: "795097228349",
  appId: "1:795097228349:web:809178c69e06dabb9f3654",
  measurementId: "G-XNQWDX69XZ"
};
firebase.initializeApp(firebaseConfig);

export default firebase;



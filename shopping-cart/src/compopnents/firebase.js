import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAq9MO5JcfPTl00hdnXfPTWf70vMB2WjUQ",
  authDomain: "myfoodycart.firebaseapp.com",
  projectId: "myfoodycart",
  storageBucket: "myfoodycart.appspot.com",
  messagingSenderId: "820401112166",
  appId: "1:820401112166:web:bc5cb8f3fc956ec884d9a7",
  measurementId: "G-CP1KDRYSML"
};


//this will connect everything
const app = firebase.initializeApp(firebaseConfig); 



const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();


export { auth,authProvider,app }
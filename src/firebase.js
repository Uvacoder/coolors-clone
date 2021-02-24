import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import "@firebase/analytics";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB71o1XhMy-0TTHTh1CfbJabPCowI4_au0",
  authDomain: "coolors-3f8ea.firebaseapp.com",
  projectId: "coolors-3f8ea",
  storageBucket: "coolors-3f8ea.appspot.com",
  messagingSenderId: "957820641224",
  appId: "1:957820641224:web:1384a8c982e62c0fd72afd",
  measurementId: "G-ECCR1DD4W9"
});
// app.analytics();

export const auth = app.auth();
export const database = app.database();
export default app;

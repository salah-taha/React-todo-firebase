import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA9pEPkbW9E81LEzoFTTpIGJiV1BLfUS8c",
  authDomain: "react-todo-39d47.firebaseapp.com",
  databaseURL: "https://react-todo-39d47.firebaseio.com",
  projectId: "react-todo-39d47",
  storageBucket: "react-todo-39d47.appspot.com",
  messagingSenderId: "980294364065",
  appId: "1:980294364065:web:0db6735cc19f72f6d639e0",
});

const db = firebaseApp.firestore();

export default db;

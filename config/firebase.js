import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB4jjLFZWaU6LtHdeDSUv7m2uCMWxs_PQ",
  authDomain: "viki-clone.firebaseapp.com",
  databaseURL: "https://viki-clone.firebaseio.com",
  projectId: "viki-clone",
  storageBucket: "viki-clone.appspot.com",
  messagingSenderId: "1032614865692",
  appId: "1:1032614865692:web:3d24fa1b9a46759b69e8d9",
  measurementId: "G-RMZXQX0PBK",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const auth = firebaseApp.auth();

export { auth };

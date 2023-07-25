import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDU_2h5bBlJAT88yJD2NUV8xsmm-hLJY9s",
  authDomain: "e-ride-753e0.firebaseapp.com",
  projectId: "e-ride-753e0",
  storageBucket: "e-ride-753e0.appspot.com",
  messagingSenderId: "201279263781",
  appId: "1:201279263781:web:689bf0c82ba6e79728dbcc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

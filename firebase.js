import firebase from 'firebase'
import "firebase/database";

const config =  {
    apiKey: "AIzaSyDlwBLr-Op8pwrPIMTJuiBUKzjG02bGCq4",
    authDomain: "genderreveal-87f53.firebaseapp.com",
    databaseURL: "https://genderreveal-87f53-default-rtdb.firebaseio.com",
    projectId: "genderreveal-87f53",
    storageBucket: "genderreveal-87f53.appspot.com",
    messagingSenderId: "918334308812",
    appId: "1:918334308812:web:9636ec5ad6b50601dc1d69",
    measurementId: "G-CBEY2WV369"
  };

   // Initialize Firebase
   firebase.initializeApp(config);
   export default firebase.database();
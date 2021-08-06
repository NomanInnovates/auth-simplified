import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDt6y3fLAE-1vvcPA6iCINlMf8aBzHRTeU",
    authDomain: "authentication-simplied-dev.firebaseapp.com",
    projectId: "authentication-simplied-dev",
    storageBucket: "authentication-simplied-dev.appspot.com",
    messagingSenderId: "1087785151586",
    appId: "1:1087785151586:web:9bcdbf9b3ba2498717f53b"
  };
   firebase.initializeApp(firebaseConfig);
   export const auth = firebase.auth()
   export default firebase
import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAoSezZTg8KIDubV9YPvFe9tX6PEAklZfQ",
  authDomain: "tutorial-firebase-5fd45.firebaseapp.com",
  databaseURL: "https://tutorial-firebase-5fd45.firebaseio.com",
  projectId: "tutorial-firebase-5fd45",
  storageBucket: "tutorial-firebase-5fd45.appspot.com",
  messagingSenderId: "949304586255",
  appId: "1:949304586255:web:9b46e6d9e66d6c199ef37a",
  measurementId: "G-DNN44FEY0S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB7ZzDB1Cx4U37VBuKqNK3wNhSJJPCUbVo",
    authDomain: "team-voting-5abfa.firebaseapp.com",
    projectId: "team-voting-5abfa",
    storageBucket: "team-voting-5abfa.appspot.com",
    messagingSenderId: "556334841041",
    appId: "1:556334841041:web:711ee59ee0121a587759f0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();
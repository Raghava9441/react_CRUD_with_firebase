import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDjNi5F8N27Q-DdaircDDf3DBuEcxpDtJw",
  authDomain: "fir-crud-94b9f.firebaseapp.com",
  databaseURL: "https://fir-crud-94b9f-default-rtdb.firebaseio.com",
  projectId: "fir-crud-94b9f",
  storageBucket: "fir-crud-94b9f.appspot.com",
  messagingSenderId: "269336850473",
  appId: "1:269336850473:web:09b79628401f0269ed2c38",
};
// Initialize Firebase
 var fireDb = firebase.initializeApp(firebaseConfig);

 export default fireDb.database().ref();

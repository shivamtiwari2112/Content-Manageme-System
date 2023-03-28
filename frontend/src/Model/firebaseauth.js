// Firebase Authentication Replace with your data

import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDvLiqJv8GZsQz08L7IRBmkC2NIEcTlAuc",
  authDomain: "content-management-f5314.firebaseapp.com",
  databaseURL: "https://content-management-f5314-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "content-management-f5314",
  storageBucket: "content-management-f5314.appspot.com",
  messagingSenderId: "799547574147",
  appId: "1:799547574147:web:736eff6facb39d1097d8b6"
};

export default Firebase.initializeApp(config);
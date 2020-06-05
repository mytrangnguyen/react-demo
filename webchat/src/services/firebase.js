import firebase from "firebase";

// var firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyAqEv81FqrgvLdVog9N5bcfUoNVjtswk3U",
//   authDomain: "webchat-a085a.firebaseapp.com",
//   databaseURL: "https://webchat-a085a.firebaseio.com",
//   projectId: "webchat-a085a",
//   storageBucket: "webchat-a085a.appspot.com",
//   messagingSenderId: "992314328687",
//   appId: "1:992314328687:web:bd433af683241f25e36f9a",
//   measurementId: "G-Z2NZX4TR1L",
// });
// // Initialize Firebase
firebase.initializeApp({apiKey: "AIzaSyAqEv81FqrgvLdVog9N5bcfUoNVjtswk3U",
authDomain: "webchat-a085a.firebaseapp.com",
databaseURL: "https://webchat-a085a.firebaseio.com",
projectId: "webchat-a085a",
storageBucket: "webchat-a085a.appspot.com",
messagingSenderId: "992314328687",
appId: "1:992314328687:web:bd433af683241f25e36f9a",
measurementId: "G-Z2NZX4TR1L",});

firebase.analytics();

export {firebase};

// export {firebaseConfig};
export const auth = firebase.auth();
export const db = firebase.database();
export const storage = firebase.storage();

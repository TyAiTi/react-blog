import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBzvKAafPrw15oNqiVo_fr2zjPWwIy0tYE",
  authDomain: "hungiot.firebaseapp.com",
  databaseURL: "https://hungiot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hungiot",
  storageBucket: "hungiot.appspot.com",
  messagingSenderId: "683754437495",
  appId: "1:683754437495:web:c996951ac356a2c495bf72",
  measurementId: "G-98HGSNJ57W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBzvKAafPrw15oNqiVo_fr2zjPWwIy0tYE",
    authDomain: "hungiot.firebaseapp.com",
    projectId: "hungiot",
    storageBucket: "hungiot.appspot.com",
    messagingSenderId: "683754437495",
    appId: "1:683754437495:web:c996951ac356a2c495bf72",
    measurementId: "G-98HGSNJ57W"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)
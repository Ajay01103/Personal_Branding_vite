import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBtPjA2cEnYxaWpXqxrxjuBxxj57aXxtH0",
    authDomain: "pixabay-clone-bb3b8.firebaseapp.com",
    projectId: "pixabay-clone-bb3b8",
    storageBucket: "pixabay-clone-bb3b8.appspot.com",
    messagingSenderId: "318848289479",
    appId: "1:318848289479:web:41c8484904d55ae1968ce2"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firebaseAuth = getAuth(app)
export { app, firebaseAuth };
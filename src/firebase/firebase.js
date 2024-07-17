
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCqMwaFXLVdHOfB0nKupMKhNkS-ngQKh-I",
    authDomain: "u-tube-mini.firebaseapp.com",
    projectId: "u-tube-mini",
    storageBucket: "u-tube-mini.appspot.com",
    messagingSenderId: "249846182336",
    appId: "1:249846182336:web:ca6504ca705143b266d825"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  export { app, auth, provider  };








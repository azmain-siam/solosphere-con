import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGREqPxkDd-RVSuvxUciNcXDqscnrki8s",
  authDomain: "solosphere-d4fab.firebaseapp.com",
  projectId: "solosphere-d4fab",
  storageBucket: "solosphere-d4fab.appspot.com",
  messagingSenderId: "532555140142",
  appId: "1:532555140142:web:a7e1e550a15d9fc0a223bf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

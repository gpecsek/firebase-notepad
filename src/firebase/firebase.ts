import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR491iJVkSiXUx1lpOXIB1TuOysQ5UUJs",
  authDomain: "fir-notepad-1dd7e.firebaseapp.com",
  projectId: "fir-notepad-1dd7e",
  storageBucket: "fir-notepad-1dd7e.appspot.com",
  messagingSenderId: "178256628665",
  appId: "1:178256628665:web:698459005f8394d9f10468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };